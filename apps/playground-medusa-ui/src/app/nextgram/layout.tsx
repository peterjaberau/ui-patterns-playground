import './global.css';

export const metadata = {
  title: 'NextGram',
  description: 'A sample Next.js app showing dynamic routing with modals as a route.',
};

export default function Layout(props: { children: React.ReactNode; modal: React.ReactNode }) {
  return (
    <>
      {props.children}
      {props.modal}
      <div id="modal-root" />
    </>
  );
}

/*




 <html>
 <body>
 {props.children}
 {props.modal}
 <div id="modal-root" />
 </body>
 </html>
 */
