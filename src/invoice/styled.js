import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;
export const Header = styled.div`
  display: flex;
  box-sizing: border-box;
  max-width: 760px;
  width: 100%;
  margin-bottom: 40px;
  justify-content: space-between;
`;
export const LogoBox = styled.div`
  display: flex;
  flex-direction: column;
`;
export const Logo = styled.div`
  display: flex;
  font-size: 32px;
  line-height: 36px;
  letter-spacing: -1px;
  font-weight: 700;
  margin-bottom: 8px;
  color: #fff;
`;
export const Subtitle = styled.div`
  display: flex;
  font-size: 14px;
  line-height: 15px;
  letter-spacing: -0.25px;
  font-weight: 500;
  color: #e0e4fb;
`;
export const ButtonBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const FilterBtn = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-size: 14px;
  line-height: 15px;
  font-weight: 700;
  color: #7c5dfa;
  margin-right: 20px;
  svg {
    margin-left: 10px;
    color: #7c5dfa;
  }
`;
export const InvoiceBtn = styled.div`
  display: flex;
  box-sizing: border-box;
  width: 144px;
  height: 44px;
  padding: 10px;
  align-items: center;
  justify-content: space-between;
  background-color: #7b5cfa;
  border-radius: 24px;
  outline: none;
  border: none;
  color: #f9f9fb;
  cursor: pointer;
`;
export const IconInvoice = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f9f9fb;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  svg {
    color: #7c5dfa;
  }
`;
export const InvoiceItem = styled.div`
  display: grid;
  width: 760px;
  a {
    text-decoration: none;
  }
`;
export const Card = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: 1fr;
  align-items: center;
  background-color: #1e2139;
  outline: 1px solid transparent;
  border-radius: 8px;
  padding-inline: 24px 24px;
  padding-block: 24px 24px;
  box-shadow: 0 10px 10px -10px rgb(72 84 159 / 10%);
  margin-bottom: 16px;
  transition: outline-color 0.35s ease-in-out;
  text-decoration: none;
  cursor: pointer;
  :hover {
    outline-color: #7b5cfa;
  }
`;
export const UserId = styled.h3`
  display: flex;
  align-items: center;
  font-size: 12px;
  line-height: 15px;
  letter-spacing: -0.25px;
  font-weight: 700;
  color: #fff;
  span {
    color: #7e88c4;
  }
`;
export const InvoicePayment = styled.div`
  display: flex;
  color: #e0e4fb;
  font-size: 12px;
  line-height: 15px;
  letter-spacing: -0.25px;
  font-weight: 500;
  margin-right: 20px;
  span {
    margin-right: 5px;
  }
`;
export const InvoiceUserName = styled.div`
  display: flex;
  font-size: 12px;
  line-height: 15px;
  letter-spacing: -0.25px;
  font-weight: 500;
  color: #e0e4fb;
`;
export const InvoiceTotal = styled.div`
  display: flex;
  grid-column: 4;
  grid-row: 1;
  align-self: center;
  color: #e0e4fb;
`;
export const InvoiceStatus = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  justify-self: end;
  width: 104px;
  height: 40px;
  text-transform: capitalize;
  border-radius: 6px;
  svg {
    margin-right: 8px;
  }
  background-color: ${({ status }) => {
    switch (status) {
      case "paid":
        return "rgba(51,215,160,.06)";
    }
  }};
  background-color: ${({ status }) => {
    switch (status) {
      case "pending":
        return "rgba(255,145,0,.06)";
    }
  }};
  background-color: ${({ status }) => {
    switch (status) {
      case "draft":
        return "rgba(224,228,251,.06)";
    }
  }};
  color: ${({ status }) => {
    //console.log(status)
    switch (status) {
      case "paid":
        return "#33d7a0";
      // default:
      //   return "white";
    }
  }};
  color: ${({ status }) => {
    //console.log(status)
    switch (status) {
      case "pending":
        return "#ff9100";
      // default:
      //   return "white";
    }
  }};
  color: ${({ status }) => {
    //console.log(status)
    switch (status) {
      case "draft":
        return "#e0e4fb";
      // default:
      //   return "white";
    }
  }};
`;
export const InvoiceDetailContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;
export const ButtonBack = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  color: #9277ff;
  width: 100px;
  min-width: 100px;
  height: 42px;
  background-color: transparent;
  font-size: 12px;
  line-height: 15px;
  letter-spacing: -0.25px;
  font-weight: 700;
  cursor: pointer;
  svg {
    transform: rotate(90deg);
    margin-right: 5px;
  }
`;
export const InvoiceStatusPanel = styled.div`
  display: flex;
  width: 730px;
  box-sizing: border-box;
  align-items: center;
  justify-content: space-between;
  background-color: #1e2139;
  border-radius: 8px;
  padding: 10px;
  min-height: 90px;
  margin-bottom: 25px;
`;
export const StatusHeading = styled.div`
  display: flex;
  color: #888eaf;
  margin-right: 16px;
  font-size: 12px;
  line-height: 15px;
  letter-spacing: -0.25px;
  font-weight: 700;
`;
export const LeftSide = styled.div`
  display: flex;
  align-items: center;
`;
export const RightSide = styled.div`
  display: flex;
`;
export const ButtonEdit = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  cursor: pointer;
  border-radius: 24px;
  color: #f9f9fb;
  border: none;
  margin-right: 15px;
  padding: 14px;
  font-size: 12px;
  line-height: 15px;
  font-weight: 700;
  transition: all 0.3s ease-in-out;
  background-color: #252946;
`;
export const ButtonDelete = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 90px;
  cursor: pointer;
  border-radius: 24px;
  color: #f9f9fb;
  border: none;
  margin-right: 15px;
  padding-block: 16px;
  padding-inline: 24px;
  font-size: 12px;
  line-height: 15px;
  font-weight: 700;
  transition: all 0.3s ease-in-out;
  background-color: #ec5555;
`;
export const ButtonPaid = styled.div`
  display: flex;
  width: 150px;
  align-items: center;
  justify-content: center;
  background-color: #7b5cfa;
  border-radius: 24px;
  color: #f9f9fb;
  border: none;
  font-size: 12px;
  line-height: 15px;
  font-weight: 700;
  transition: all 0.3s ease-in-out;
  cursor: pointer;
`;
export const FooterBox = styled.div`
  display: flex;
  width: 730px;
  margin-bottom: 50px;
  a {
    text-decoration: none;
  }
`;
export const UserDetailPage = styled.div`
  display: grid;
  box-sizing: border-box;
  width: 730px;
  grid-template-columns: 1fr 1fr 1.5fr;
  grid-template-rows: repeat(3, max-content);
  grid-gap: 30px;
  gap: 30px;
  grid-column: 2/3;
  grid-row: 4/5;
  color: #fff;
  padding: 24px;
  background-color: #1e2139;
  box-shadow: 0 10px 10px -10px rgb(72 84 159 / 10%);
  border-radius: 8px;
`;
export const UserDetailPageId = styled.div`
  display: grid;
  grid-column: 1/2;
  grid-row: 1/2;
  p {
    margin: 0;
    padding: 0;
    color: #e0e4fb;
    font-size: 12px;
    line-height: 15px;
    letter-spacing: -0.25px;
    font-weight: 500;
  }
`;
export const IdBox = styled.h5`
  display: flex;
  text-transform: uppercase;
  font-size: 12px;
  line-height: 15px;
  letter-spacing: -0.25px;
  font-weight: 700;
  margin: 0px 0px 8px 0px;
  padding: 0;
  span {
    color: #7e88c4;
  }
`;
export const UserDetailPageAddress = styled.div`
  display: grid;
  grid-column: 3/4;
  grid-row: 1/2;
  justify-self: end;
  font-size: 11px;
  line-height: 18px;
  letter-spacing: -0.23px;
  font-weight: 500;
  p {
    padding: 0;
    margin: 0;
  }
`;
export const UserDetailPageInvoice = styled.div`
  display: grid;
  grid-column: 1/2;
  grid-row: 2/3;
  p {
    font-size: 12px;
    line-height: 15px;
    letter-spacing: -0.25px;
    padding: 0;
    margin: 0 0 12px 0;
    font-weight: 500;
    color: #e0e4fb;
  }
`;
export const InvoiceDate = styled.div`
  display: flex;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: -0.8px;
  font-weight: 700;
  margin-bottom: 32px;
`;
export const PaymentDue = styled.div`
  display: flex;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: -0.8px;
  font-weight: 700;
  margin-bottom: 32px;
`;
export const UserDetailPageBilling = styled.div`
  display: grid;
  grid-column: 2/3;
  grid-row: 2/3;
  p {
    font-size: 12px;
    padding: 0;
    margin: 0;
    line-height: 15px;
    letter-spacing: -0.25px;
    font-weight: 500;
    color: #e0e4fb;
  }
`;
export const UserDetailsPageClientName = styled.div`
  display: flex;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: -0.8px;
  font-weight: 700;
  margin-block: 12px 8px;
`;
export const UserDetailPageEmail = styled.div`
  display: grid;
  grid-column: 3/-1;
  grid-row: 2/3;
  p {
    font-size: 12px;
    line-height: 15px;
    letter-spacing: -0.25px;
    padding: 0;
    margin: 0;
    font-weight: 500;
    //margin-bottom: 12px;
    color: #e0e4fb;
  }
`;
export const EmailUser = styled.div`
  display: flex;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: -0.8px;
  font-weight: 700;
`;
export const UserDetailsPageCheckout = styled.div`
  display: grid;
  grid-column: 1/-1;
  grid-row: 5/6;
  color: #fff;
  background-color: #252946;
  border-radius: 8px 8px 8px 8px;
`;
export const UserDetailPageHeader = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  padding-block: 24px 24px;
  padding-inline: 24px 24px;
`;
export const UserDetailPageHeaderName = styled.h5`
  display: grid;
  grid-column: 1/2;
  grid-row: 1;
  font-size: 11px;
  line-height: 18px;
  letter-spacing: -0.23px;
  font-weight: 500;
  color: #e0e4fb;
  margin: 0;
  text-transform: capitalize;
`;
export const UserDetailPageHeaderQty = styled.h5`
  display: grid;
  grid-column: 2/3;
  grid-row: 1;
  font-size: 11px;
  line-height: 18px;
  letter-spacing: -0.23px;
  font-weight: 500;
  color: #e0e4fb;
  margin: 0;
  text-transform: uppercase;
`;
export const UserDetailPageHeaderPrice = styled.h5`
  display: grid;
  grid-column: 3/4;
  grid-row: 1;
  justify-self: end;
  font-size: 11px;
  line-height: 18px;
  letter-spacing: -0.23px;
  font-weight: 500;
  color: #e0e4fb;
  margin: 0;
  text-transform: capitalize;
`;
export const UserDetailPageHeaderTotal = styled.h5`
  display: grid;
  grid-column: 4/5;
  grid-row: 1;
  justify-self: end;
  font-size: 11px;
  line-height: 18px;
  letter-spacing: -0.23px;
  font-weight: 500;
  color: #e0e4fb;
  margin: 0;
  text-transform: capitalize;
`;
export const UserDetailPageItem = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr;
  padding-block: 24px 24px;
  padding-inline: 24px 24px;
`;
export const UserDetailPageDescription = styled.div`
  display: grid;
  grid-column: 1/2;
  grid-row: 1/2;
  align-self: end;
  font-size: 12px;
  line-height: 15px;
  letter-spacing: -0.25px;
  font-weight: 700;
  color: #fff;
`;
export const UserDetailsPageTotals = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #0d0e17;
  padding-inline: 24px 24px;
  border-radius: 0 0 8px 8px;
  min-height: 80px;
  p {
    font-size: 11px;
    line-height: 18px;
    letter-spacing: -0.23px;
    font-weight: 500;
    color: #fff;
  }
  h2 {
    font-size: 20px;
    line-height: 22px;
    letter-spacing: -0.63px;
    font-weight: 700;
    color: #fff;
  }
`;
export const Quantity = styled.div`
  display: grid;
`;
export const QuantityPrice = styled.div`
  display: grid;
  grid-column: 3/4;
  grid-row: 1;
  justify-self: end;
`;
export const QuantityTotal = styled.div`
  display: grid;
  grid-column: 4/5;
  grid-row: 1;
  justify-self: end;
`;