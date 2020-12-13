import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { colorSet } from "../styles/Colors";
import { MdAddCircleOutline } from "react-icons/md";
import Form from "./Form";
import { getStoreItemArray } from "../transactionReducer";
import TransactionItem from "./TransactionItem";
import { useTransaction } from "../contexts/transactionContext";

const Transactions = () => {
  const { allTransactions, setAllTransactions } = useTransaction();
  const [showModal, setShowModal] = useState(false);
  const handleAddIncome = () => {
    window.alert("Now add income source");
  };

  const handleAddExpense = () => {
    setShowModal(true);
  };

  console.log(allTransactions);

  return (
    <Wrapper>
      <ActionContainer>
        <Action>
          <ActionTitle>Add Transaction</ActionTitle>
          <MdAddCircleOutline
            size={40}
            style={{ color: `${colorSet.primaryYellow}`, cursor: "pointer" }}
            onClick={handleAddExpense}
          />
        </Action>
      </ActionContainer>

      <TransactionContainer>
        <Title>Your latest transactions</Title>
        <AllTransactions>
          {allTransactions &&
            allTransactions.map((item) => {
              return <TransactionItem item={item} />;
            })}
        </AllTransactions>
      </TransactionContainer>
      {showModal && (
        <Form
          setShowModal={setShowModal}
          showModal={showModal}
          allTransactions={allTransactions}
        />
      )}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  color: white;
  background-color: black;
  height: 100%;
`;

const ActionContainer = styled.div`
  padding: 4% 1%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Action = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 4%;
`;

const ActionTitle = styled.h2`
  color: white;
  padding-bottom: 5px;
  font-size: 28px;
`;

const Title = styled.h1`
  font-size: 24px;
`;

const TransactionContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const AllTransactions = styled.div``;

export default Transactions;
