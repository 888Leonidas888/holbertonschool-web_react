# React state: Guía Básica

## Introducción

El estado (state) en React es uno de los conceptos más importantes para construir aplicaciones dinámicas e interactivas. El estado permite a los componentes de React almacenar y gestionar información que puede cambiar a lo largo del tiempo. Esta guía cubre los fundamentos del estado en React y cómo utilizarlo en tus aplicaciones.

## ¿Qué es el estado en React?

El estado es un objeto que representa las partes de la aplicación que pueden cambiar. Cada componente de clase en React puede tener su propio estado, y se puede acceder a este estado mediante this.state.

## Inicialización del estado

En un componente de clase, el estado se inicializa en el constructor del componente. Aquí hay un ejemplo de cómo inicializar el estado:

```jsx
import React, { Component } from 'react';

class MiComponente extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contador: 0,
    };
  }

  render() {
    return (
      <div>
        <p>Contador: {this.state.contador}</p>
      </div>
    );
  }
}

export default MiComponente;
```

En componentes funcionales, puedes usar el hook useState para manejar el estado:

```jsx
import React, { useState } from 'react';

const MiComponenteFuncional = () => {
  const [contador, setContador] = useState(0);

  return (
    <div>
      <p>Contador: {contador}</p>
    </div>
  );
};

export default MiComponenteFuncional;
```

## Actualización del estado

```jsx
class MiComponente extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contador: 0,
    };
  }

  incrementarContador = () => {
    this.setState({ contador: this.state.contador + 1 });
  };

  render() {
    return (
      <div>
        <p>Contador: {this.state.contador}</p>
        <button onClick={this.incrementarContador}>Incrementar</button>
      </div>
    );
  }
}
```

En componentes funcionales, usa la función actualizadora proporcionada por useState:

```jsx
const MiComponenteFuncional = () => {
  const [contador, setContador] = useState(0);

  const incrementarContador = () => {
    setContador(contador + 1);
  };

  return (
    <div>
      <p>Contador: {contador}</p>
      <button onClick={incrementarContador}>Incrementar</button>
    </div>
  );
};
```

## Pasando estado a componentes hijos

Puedes pasar el estado y las funciones que actualizan el estado a componentes hijos a través de props:

```jsx
const Hijo = ({ contador, incrementarContador }) => (
  <div>
    <p>Contador en el hijo: {contador}</p>
    <button onClick={incrementarContador}>Incrementar en el hijo</button>
  </div>
);

const Padre = () => {
  const [contador, setContador] = useState(0);

  const incrementarContador = () => {
    setContador(contador + 1);
  };

  return (
    <div>
      <p>Contador en el padre: {contador}</p>
      <Hijo contador={contador} incrementarContador={incrementarContador} />
    </div>
  );
};
```
## Ejemplo completo

Este ejemplo muestra cómo inicializar y actualizar el estado en un componente de clase y un componente funcional:

```jsx
import React, { Component, useState } from 'react';

// Componente de Clase
class ClaseComponente extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contador: 0
    };
  }

  incrementarContador = () => {
    this.setState({ contador: this.state.contador + 1 });
  }

  render() {
    return (
      <div>
        <p>Contador: {this.state.contador}</p>
        <button onClick={this.incrementarContador}>Incrementar</button>
      </div>
    );
  }
}

// Componente Funcional
const FuncionalComponente = () => {
  const [contador, setContador] = useState(0);

  const incrementarContador = () => {
    setContador(contador + 1);
  };

  return (
    <div>
      <p>Contador: {contador}</p>
      <button onClick={incrementarContador}>Incrementar</button>
    </div>
  );
};

const App = () => (
  <div>
    <h1>Ejemplos de Estado en React</h1>
    <ClaseComponente />
    <FuncionalComponente />
  </div>
);

export default App;

```
