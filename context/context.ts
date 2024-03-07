'use client';

import { createContext }  from 'react';

interface IContext {
  prifix: string;
}

const CreateContext = createContext<IContext>({ prifix: "" });

export const ContextProvider = CreateContext.Provider;
export const ContextConsumer = CreateContext.Consumer;

export default CreateContext;