'use client';
import * as zod from 'zod';
import { DotsSix } from '@medusajs/icons';
import { useForm, FormProvider, Controller } from 'react-hook-form';
import { Form } from '@/components/common/form';
import { Button, Container, Drawer, Input, Select } from '@medusajs/ui';
import { PropsWithChildren, useEffect, useState } from 'react';
import { GridStackHandleReInitializer, useGridStackContext, useGridStackItemContext } from '@/ui/gridstack';
import { newId } from '../../../utils';
import { CUSTOM_DRAGGABLE_HANDLE_CLASSNAME } from '../../../default-grid-options';
import { useComponentInfoMap } from './component-info-map';
import { Header } from '@/components/common/header';
import { CodeBlock } from '@medusajs/ui';

type ComplexCardProps = {
  title: string;
  color?: string;
};

export function ComplexCardTitle(props: ComplexCardProps) {
  return null;
}

function CardTitle(props: ComplexCardProps) {
  return (
    <div style={{ color: props.color }}>
      <h1>{props.title}</h1>
    </div>
  );
}

export function ComplexCardEditableWrapper(props: PropsWithChildren<{ serializableProps: ComplexCardProps }>) {
  const { id, remove, getBounds, setSize: setSizeGridStack } = useGridStackItemContext();
  const { addWidget } = useGridStackContext();
  const { addComponentInfo, updateComponentInfo } = useComponentInfoMap();

  const [dialogEditOpen, setDialogEditOpen] = useState(false);

  const [size, _setSize] = useState<{ w: number; h: number }>({
    w: 0,
    h: 0,
  });

  const form = useForm({
    defaultValues: {
      title: props.serializableProps.title ?? '',
      color: props.serializableProps.color ?? 'red',
      size: size,
    },
  } as any);

  const { watch, setValue } = form;

  const updateComponent = () => {
    updateComponentInfo(id, {
      component: 'ComplexCardTitle',
      serializableProps: {
        title: watch('title'),
        color: watch('color'),
      },
    });
  };

  const setTitle = (title: string) => {
    setValue('title', title);
    updateComponent();
  };

  const setColor = (color: string) => {
    setValue('color', color);
    updateComponent();
  };

  const setSize = (newSize: { w: number; h: number }) => {
    _setSize(newSize); // Keep local state updated
    setValue('size', newSize);
    setSizeGridStack(newSize);
  };

  const [formSnippet, setFormSnippet]: any = useState([
    {
      label: watch('title'),
      language: 'json',
      code: JSON.stringify(
        {
          watch: form.watch(),
        },
        null,
        2,
      ),
    },
  ]);
  //
  // useEffect(() => {
  //   setFormState(JSON.stringify(form.watch(), null, 2));
  // }, [form.watch()]);

  return (
    <>
      <Container className="h-full p-0">
        <Header title={<CardTitle title={watch('title')} color={watch('color')} />}>
          <div className="flex flex-row justify-end gap-2">
            <Button
              size="small"
              variant="secondary"
              onClick={() => {
                const widgetId = newId();

                addWidget({
                  id: widgetId,
                  ...getBounds()?.current,
                });

                addComponentInfo(widgetId, {
                  component: 'ComplexCardTitle',
                  serializableProps: { ...props.serializableProps },
                });
              }}
            >
              Duplicate
            </Button>

            <Button
              size="small"
              variant="secondary"
              onClick={() => {
                remove();
              }}
            >
              Remove
            </Button>

            <Drawer open={dialogEditOpen} onOpenChange={() => setDialogEditOpen(false)}>
              <Drawer.Content>
                <Drawer.Header>
                  <Drawer.Title>Edit Card {watch('title')}</Drawer.Title>
                </Drawer.Header>
                <Drawer.Body>
                  <FormProvider {...form}>
                    <Form.Field
                      control={form.control}
                      name="title"
                      render={({ field }) => (
                        <Form.Item>
                          <Form.Label>Title</Form.Label>
                          <Form.Control>
                            <Input {...field} />
                          </Form.Control>
                          <Form.ErrorMessage />
                        </Form.Item>
                      )}
                    />

                    <div className="flex flex-col gap-y-8">
                      <div className="grid grid-cols-2 gap-4">
                        <Form.Field
                          control={form.control}
                          name="color"
                          render={({ field: { ref, ...field } }) => (
                            <Form.Item className="gap-y-4">
                              <div>
                                <Form.Label>{'Color'}</Form.Label>
                                <Form.Hint>{'Change the title color!'}</Form.Hint>
                              </div>
                              <Form.Control>
                                <Select {...field} onValueChange={field.onChange}>
                                  <Select.Trigger ref={ref} className="py-1 text-[13px]">
                                    <Select.Value placeholder={'Select a color'}>
                                      {['red', 'blue', 'green', 'yellow'].find((color) => color === field.value)}
                                    </Select.Value>
                                  </Select.Trigger>
                                  <Select.Content>
                                    <Select.Item key="red" value="red">
                                      Red
                                    </Select.Item>
                                    <Select.Item key="blue" value="blue">
                                      Blue
                                    </Select.Item>
                                    <Select.Item key="green" value="green">
                                      Green
                                    </Select.Item>
                                    <Select.Item key="yellow" value="yellow">
                                      Yellow
                                    </Select.Item>
                                  </Select.Content>
                                </Select>
                              </Form.Control>
                              <Form.ErrorMessage />
                            </Form.Item>
                          )}
                        />

                        <Form.Field
                          control={form.control}
                          name="size"
                          render={({ field: { ref, ...field } }) => (
                            <Form.Item className="gap-y-4">
                              <div>
                                <Form.Label>{'Size'}</Form.Label>
                                <Form.Hint>{'Change the card size!'}</Form.Hint>
                              </div>
                              <Form.Control>
                                <Select {...field} onValueChange={field.onChange}>
                                  <Select.Trigger ref={ref} className="py-1 text-[13px]">
                                    <Select.Value placeholder={'Select a size'}>
                                      {['4x4', '6x6', '8x8'].find(
                                        (size) => size === `${field.value.w}x${field.value.h}`,
                                      )}
                                    </Select.Value>
                                  </Select.Trigger>
                                  <Select.Content>
                                    <Select.Item key="4x4" value="4x4">
                                      4x4
                                    </Select.Item>
                                    <Select.Item key="6x6" value="6x6">
                                      6x6
                                    </Select.Item>
                                    <Select.Item key="8x8" value="8x8">
                                      8x8
                                    </Select.Item>
                                  </Select.Content>
                                </Select>
                              </Form.Control>
                              <Form.ErrorMessage />
                            </Form.Item>
                          )}
                        />
                      </div>
                    </div>
                  </FormProvider>

                  <Container className="bg-ui-bg-secondary mt-8 p-4">
                    <Button
                      size="small"
                      variant="secondary"
                      onClick={() =>
                        setFormSnippet([
                          {
                            label: watch('title'),
                            language: 'json',
                            code: JSON.stringify(
                              {
                                watch: form.watch(),
                              },
                              null,
                              2,
                            ),
                          },
                        ])
                      }
                    >
                      Refresh Code
                    </Button>
                    <CodeBlock snippets={formSnippet}>
                      <CodeBlock.Body />
                    </CodeBlock>
                  </Container>
                </Drawer.Body>
                <Drawer.Footer>
                  <Drawer.Close asChild>
                    <Button size="small" variant="secondary" onClick={() => setDialogEditOpen(false)}>
                      Close
                    </Button>
                  </Drawer.Close>

                  <Button size="small" variant="primary" onClick={() => setDialogEditOpen(false)}>
                    Save
                  </Button>
                </Drawer.Footer>
              </Drawer.Content>
            </Drawer>

            <Button
              size="small"
              variant="secondary"
              onClick={() => {
                setDialogEditOpen(true);
                const bounds = getBounds();
                setSize({
                  w: bounds?.current.w ?? 0,
                  h: bounds?.current.h ?? 0,
                });
              }}
            >
              Edit
            </Button>

            <GridStackHandleReInitializer>
              <Button
                size="small"
                variant="transparent"
                style={{
                  cursor: 'move',
                }}
                className={CUSTOM_DRAGGABLE_HANDLE_CLASSNAME}
              >
                <DotsSix /> Move
              </Button>
            </GridStackHandleReInitializer>
          </div>
        </Header>

        {props.children}
      </Container>
    </>
  );
}

/*


 <div
 style={{
 display: 'flex',
 flexDirection: 'column',
 alignItems: 'flex-start',
 gap: 8,
 }}
 >
 <label>
 Title:
 <input value={title} onChange={(e) => setTitle(e.target.value)} />
 </label>
 <label>
 Color:
 <select value={color} onChange={(e) => setColor(e.target.value)}>
 <option value="red">Red</option>
 <option value="blue">Blue</option>
 <option value="green">Green</option>
 <option value="yellow">Yellow</option>
 </select>
 </label>
 <label>
 Size:
 <select
 value={`${size.w}x${size.h}`}
 onChange={(e) => {
 const [w, h] = e.target.value.split('x').map(Number);
 setSize({ w, h });
 }}
 >
 <option value="4x4">4x4</option>
 <option value="6x6">6x6</option>
 <option value="8x8">8x8</option>
 </select>
 </label>
 </div>
 */
