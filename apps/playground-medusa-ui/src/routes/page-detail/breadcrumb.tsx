'use client';
import { HttpTypes } from '@medusajs/types';
// import { UIMatch } from "react-router-dom"
import { useParams } from 'next/navigation';

// import { useCustomer } from "../../../hooks/api"
import { useCustomer } from './loader';

// type CustomerDetailBreadcrumbProps = UIMatch<HttpTypes.AdminCustomerResponse>;
type CustomerDetailBreadcrumbProps = {
  data: HttpTypes.AdminCustomerResponse | any;
};

export const CustomerDetailBreadcrumb = (props: CustomerDetailBreadcrumbProps) => {
  // const { id } = props.params || {};
  const params = useParams();
  const id = params?.id as string | undefined;

  const { customer } = useCustomer(id!, undefined, {
    initialData: props.data,
    enabled: Boolean(id),
  });

  if (!customer) {
    return null;
  }

  const name = [customer.first_name, customer.last_name].filter(Boolean).join(' ');

  const display = name || customer.email;

  return <span>{display}</span>;
};
