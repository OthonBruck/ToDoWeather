import { Box, Button, Grid, TextField } from "@material-ui/core";
import React, { Fragment, useReducer } from "react";
import { Controller, FormProvider, useForm } from "react-hook-form";
import schema from "./schema";
import useStyles from "./styles";
import { yupResolver } from "@hookform/resolvers/yup";

type Inputs = {
  tarefa: string;
  descricao: string;
};

interface ToDo {
  tarefas: Inputs[];
}

type Actions = {
  type: string;
  items: Inputs;
};

const ACTIONS = {
  ADD_TODO: "add-todo",
};

const initialState: ToDo = {
  tarefas: [],
};

function reducer(state: ToDo, action: Actions) {
  switch (action.type) {
    case "add-todo":
      console.log(state);
      return { ...state, tarefas: [...state.tarefas, action.items] };
    default:
      return state;
  }
}

const FormToDo: React.FC = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const classes = useStyles();
  const onSubmit = (data: Inputs) => {
    dispatch({ type: "add-todo", items: data });
    console.log(data);
  };

  const methods = useForm<Inputs>({
    reValidateMode: "onBlur",
    // resolver: yupResolver(schema),
  });

  const { handleSubmit, errors } = methods;

  return (
    <Fragment>
      <FormProvider {...methods}>
        <form className={classes.form} onSubmit={handleSubmit(onSubmit)}>
          <Box style={{ width: "50%" }} className={classes.Grid}>
            <Box
              style={{
                width: "100%",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Controller
                as={
                  <TextField
                    size="medium"
                    variant="standard"
                    label="Tarefa"
                    type="text"
                    value=""
                    className={classes.input}
                  />
                }
                name="tarefa"
                defaultValue=""
              />
            </Box>
            <Box
              style={{
                marginTop: 5,
                width: "100%",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Controller
                as={
                  <TextField
                    size="medium"
                    variant="standard"
                    label="Descrição"
                    type="text"
                    value=""
                    className={classes.input}
                  />
                }
                name="descricao"
                defaultValue=""
              />
            </Box>
            <Box
              style={{
                marginTop: 15,
                width: "100%",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Button variant="contained" color="primary" type="submit">
                Adicionar
              </Button>
            </Box>
          </Box>
        </form>
      </FormProvider>
    </Fragment>
  );
};

export default FormToDo;
