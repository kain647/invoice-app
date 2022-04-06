import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { FaAngleDown } from "react-icons/fa";
import { HiPlusSm } from "react-icons/hi";
import { GoPrimitiveDot } from "react-icons/go";
import {
  Container,
  Header,
  LogoBox,
  Logo,
  Subtitle,
  ButtonBox,
  FilterBtn,
  InvoiceBtn,
  IconInvoice,
  InvoiceItem,
  Card,
  UserId,
  InvoicePayment,
  InvoiceUserName,
  InvoiceTotal,
  InvoiceStatus,
  InvoiceDetailContainer,
  ButtonBack,
  InvoiceStatusPanel,
  StatusHeading,
  LeftSide,
  RightSide,
  ButtonEdit,
  ButtonDelete,
  ButtonPaid,
  FooterBox,
  UserDetailPage,
  UserDetailPageId,
  IdBox,
  UserDetailPageAddress,
  UserDetailPageInvoice,
  InvoiceDate,
  PaymentDue,
  UserDetailPageBilling,
  UserDetailsPageClientName,
  UserDetailPageEmail,
  EmailUser,
  UserDetailsPageCheckout,
  UserDetailPageHeader,
  UserDetailPageHeaderName,
  UserDetailPageHeaderQty,
  UserDetailPageHeaderPrice,
  UserDetailPageHeaderTotal,
  UserDetailPageItem,
  UserDetailPageDescription,
  UserDetailsPageTotals,
  Quantity,
  QuantityTotal,
  QuantityPrice,
} from "./styled";

const data = [
  {
    id: "XM9141",
    createdAt: "2021-08-21",
    paymentDue: "2021-09-20",
    description: "Graphic Design",
    paymentTerms: 30,
    clientName: "Alex Grim",
    clientEmail: "alexgrim@mail.com",
    status: "pending",
    senderAddress: {
      street: "19 Union Terrace",
      city: "London",
      postCode: "E1 3EZ",
      country: "United Kingdom",
    },
    clientAddress: {
      street: "84 Church Way",
      city: "Bradford",
      postCode: "BD1 9PB",
      country: "United Kingdom",
    },
    items: [
      {
        name: "Banner Design",
        quantity: 1,
        price: 156.0,
        total: 156.0,
      },
      {
        name: "Email Design",
        quantity: 2,
        price: 200.0,
        total: 400.0,
      },
    ],
    total: 556.0,
  },
  {
    id: "RG0314",
    createdAt: "2021-09-24",
    paymentDue: "2021-10-01",
    description: "Website Redesign",
    paymentTerms: 7,
    clientName: "John Morrison",
    clientEmail: "jm@myco.com",
    status: "paid",
    senderAddress: {
      street: "19 Union Terrace",
      city: "London",
      postCode: "E1 3EZ",
      country: "United Kingdom",
    },
    clientAddress: {
      street: "79 Dover Road",
      city: "Westhall",
      postCode: "IP19 3PF",
      country: "United Kingdom",
    },
    items: [
      {
        name: "Website Redesign",
        quantity: 1,
        price: 14002.33,
        total: 14002.33,
      },
    ],
    total: 14002.33,
  },
  {
    id: "RT2080",
    createdAt: "2021-10-11",
    paymentDue: "2021-10-12",
    description: "Logo Concept",
    paymentTerms: 1,
    clientName: "Alysa Werner",
    clientEmail: "alysa@email.co.uk",
    status: "pending",
    senderAddress: {
      street: "19 Union Terrace",
      city: "London",
      postCode: "E1 3EZ",
      country: "United Kingdom",
    },
    clientAddress: {
      street: "63 Warwick Road",
      city: "Carlisle",
      postCode: "CA20 2TG",
      country: "United Kingdom",
    },
    items: [
      {
        name: "Logo Sketches",
        quantity: 1,
        price: 102.04,
        total: 102.04,
      },
    ],
    total: 102.04,
  },
  {
    id: "AA1449",
    createdAt: "2021-10-7",
    paymentDue: "2021-10-14",
    description: "Re-branding",
    paymentTerms: 7,
    clientName: "Mellisa Clarke",
    clientEmail: "mellisa.clarke@example.com",
    status: "pending",
    senderAddress: {
      street: "19 Union Terrace",
      city: "London",
      postCode: "E1 3EZ",
      country: "United Kingdom",
    },
    clientAddress: {
      street: "46 Abbey Row",
      city: "Cambridge",
      postCode: "CB5 6EG",
      country: "United Kingdom",
    },
    items: [
      {
        name: "New Logo",
        quantity: 1,
        price: 1532.33,
        total: 1532.33,
      },
      {
        name: "Brand Guidelines",
        quantity: 1,
        price: 2500.0,
        total: 2500.0,
      },
    ],
    total: 4032.33,
  },
  {
    id: "TY9141",
    createdAt: "2021-10-01",
    paymentDue: "2021-10-31",
    description: "Landing Page Design",
    paymentTerms: 30,
    clientName: "Thomas Wayne",
    clientEmail: "thomas@dc.com",
    status: "pending",
    senderAddress: {
      street: "19 Union Terrace",
      city: "London",
      postCode: "E1 3EZ",
      country: "United Kingdom",
    },
    clientAddress: {
      street: "3964  Queens Lane",
      city: "Gotham",
      postCode: "60457",
      country: "United States of America",
    },
    items: [
      {
        name: "Web Design",
        quantity: 1,
        price: 6155.91,
        total: 6155.91,
      },
    ],
    total: 6155.91,
  },
  {
    id: "FV2353",
    createdAt: "2021-11-05",
    paymentDue: "2021-11-12",
    description: "Logo Re-design",
    paymentTerms: 7,
    clientName: "Anita Wainwright",
    clientEmail: "",
    status: "draft",
    senderAddress: {
      street: "19 Union Terrace",
      city: "London",
      postCode: "E1 3EZ",
      country: "United Kingdom",
    },
    clientAddress: {
      street: "",
      city: "",
      postCode: "",
      country: "",
    },
    items: [
      {
        name: "Logo Re-design",
        quantity: 1,
        price: 3102.04,
        total: 3102.04,
      },
    ],
    total: 3102.04,
  },
];

const dictionary = data.reduce((acc, invoice) => {
  const { id, paymentDue, createdAt } = invoice;
  acc[id] = {
    ...invoice,
    paymentDue: new Date(paymentDue).toDateString(),
    createdAt: new Date(createdAt).toDateString(),
  };
  return acc;
}, {});

// const dataIDs = data.reduce((acc, invoice) => {
//   const { id } = invoice;
//   acc.push(id);
//   return acc;
// }, []);

//window.data = data;
//window.dictionary = dictionary;

//console.log({ data });
//console.log({ dataIDs });
//console.log({ dictionary });

export const Single = () => {
  const { id } = useParams();
  const invoice = dictionary[id];
  const { status, createdAt, paymentDue, clientName, clientEmail, total } =
    invoice;
  const { street, city, postCode, country } = invoice.senderAddress;
  return (
    <InvoiceDetailContainer>
      <FooterBox>
        <Link to="/">
          <ButtonBack>
            <FaAngleDown />
            Go Back
          </ButtonBack>
        </Link>
      </FooterBox>
      <InvoiceStatusPanel>
        <LeftSide>
          <StatusHeading>Status</StatusHeading>
          <InvoiceStatus status={status}>
            <GoPrimitiveDot />
            {status}
          </InvoiceStatus>
        </LeftSide>
        <RightSide>
          <ButtonEdit>Edit</ButtonEdit>
          <ButtonDelete>Delete</ButtonDelete>
          <ButtonPaid>Mark as Paid</ButtonPaid>
        </RightSide>
      </InvoiceStatusPanel>
      <UserDetailPage>
        <UserDetailPageId>
          <IdBox>
            <span>#</span>
            {id}
          </IdBox>
          <p>Logo Concept</p>
        </UserDetailPageId>
        <UserDetailPageAddress>
          <p>{street}</p>
          <p>{city}</p>
          <p>{postCode}</p>
          <p>{country}</p>
        </UserDetailPageAddress>
        <UserDetailPageInvoice>
          <p>Invoice Date</p>
          <InvoiceDate>{createdAt}</InvoiceDate>
          <p>Payment Due</p>
          <PaymentDue>{paymentDue}</PaymentDue>
        </UserDetailPageInvoice>
        <ClientAddress {...invoice.clientAddress} clientName={clientName} />
        <UserDetailPageEmail>
          <p>Sent To</p>
          <EmailUser>{clientEmail}</EmailUser>
        </UserDetailPageEmail>
        <UserDetailsPageCheckout>
          <UserDetailPageHeader>
            <UserDetailPageHeaderName>item name</UserDetailPageHeaderName>
            <UserDetailPageHeaderQty>Qty.</UserDetailPageHeaderQty>
            <UserDetailPageHeaderPrice>price</UserDetailPageHeaderPrice>
            <UserDetailPageHeaderTotal>total</UserDetailPageHeaderTotal>
          </UserDetailPageHeader>
          {invoice.items.map((item) => {
            const { name, quantity, price, total } = item;
            return (
              <UserDetailPageItem>
                <UserDetailPageDescription key={invoice.items.price}>
                  {name}
                </UserDetailPageDescription>
                <Quantity>{quantity}</Quantity>
                <QuantityPrice>{price}</QuantityPrice>
                <QuantityTotal>{total}</QuantityTotal>
              </UserDetailPageItem>
            );
          })}
          <UserDetailsPageTotals>
            <p>Amount Due</p>
            <h2>{total}</h2>
          </UserDetailsPageTotals>
        </UserDetailsPageCheckout>
      </UserDetailPage>
    </InvoiceDetailContainer>
  );
};

const ClientAddress = (props) => {
  const { street, city, postCode, country, clientName } = props;
  return (
    <UserDetailPageBilling>
      <p>Bill To</p>
      <UserDetailsPageClientName>{clientName}</UserDetailsPageClientName>
      <p>{street}</p>
      <p>{city}</p>
      <p>{postCode}</p>
      <p>{country}</p>
    </UserDetailPageBilling>
  );
};

const Invoice = () => {
  const [title, setTitle] = useState("");
  useEffect(() => {
    setTitle(localStorage.getItem("title"));
  }, []);
  return (
    <Container>
      <Header>
        <LogoBox>
          <Logo>Invoices</Logo>
          <Subtitle>There are 6 total invoices</Subtitle>
        </LogoBox>
        <ButtonBox>
          <FilterBtn>
            Filter by status <FaAngleDown />
          </FilterBtn>
          <InvoiceBtn>
            <IconInvoice>
              <HiPlusSm />
            </IconInvoice>
            <span>New invoice</span>
          </InvoiceBtn>
        </ButtonBox>
      </Header>
      <InvoiceItem>
        {Object.keys(dictionary).map((id) => {
          const invoiceBox = dictionary[id];
          return <InvoiceBox {...invoiceBox} key={invoiceBox.id} />;
        })}
      </InvoiceItem>
    </Container>
  );
};

const InvoiceBox = (props) => {
  const { id, paymentDue, clientName, total, status } = props;
  return (
    <Link to={`/${id}`}>
      <Card>
        <UserId>
          <span>#</span>
          {id}
        </UserId>
        <InvoicePayment>
          <span>Due</span>
          {paymentDue}
        </InvoicePayment>
        <InvoiceUserName>{clientName}</InvoiceUserName>
        <InvoiceTotal>£{total}</InvoiceTotal>
        <InvoiceStatus status={status}>
          <GoPrimitiveDot />
          {status}
        </InvoiceStatus>
      </Card>
    </Link>
  );
};

export default Invoice;
