# Integração de Aplicação React com Amplitude

Este repositório contém um exemplo prático de como integrar uma aplicação React com o Amplitude, uma ferramenta poderosa de análise de comportamento de usuários.

## Índice

- [Pré-requisitos](#pré-requisitos)
- [Instalação](#instalação)
- [Configuração](#configuração)
- [Uso](#uso)
- [Exemplos de Eventos](#exemplos-de-eventos-comuns)
- [Contribuição](#contribuição)
- [Licença](#licença)

## Pré-requisitos

- Conta no Amplitude
- Node.js e npm instalados
- Aplicação React em funcionamento

## Instalação

1. Clone o repositório:

   ```bash
   git clone https://github.com/duhoshina/amplitude-js-example.git
   ```

2. Navegue até o diretório do projeto:

   ```bash
   cd amplitude-js-example
   ```

3. Instale as dependências:

   ```bash
   npm install
   ```

4. Instale o SDK do Amplitude:

   ```bash
   npm install @amplitude/analytics-browser
   ```

## Configuração

1. Crie um arquivo `amplitudeService.js` no diretório raiz do seu projeto e adicione a seguinte configuração:

```javascript
  import * as amplitude from '@amplitude/analytics-browser';

  const initializeAmplitude = () => {
    amplitude.init('AMPLITUDE_API_KEY');
  };

  const logEvent = (eventName, eventProperties) => {
    amplitude.track(eventName, eventProperties);
    console.log(`Dispatch Event Name: ${eventName}`);
  };

  export { initializeAmplitude, logEvent };
```

2. No seu componente principal (`App.js`), inicialize o Amplitude:

```javascript
   import React, { useEffect } from 'react';
   import { initializeAmplitude } from './services/amplitudeService';

   function App() {
     useEffect(() => {
       initializeAmplitude();
     }, []);

     return (
       <div className="App">
         {/* Seu código de app aqui */}
       </div>
     );
   }

   export default App;
```

## Uso

Você pode começar a registrar eventos utilizando a função `logEvent` que foi definida no arquivo `amplitudeService.js`. Por exemplo, registre um evento de clique em um botão:

```javascript
import { logEvent } from "../services/amplitudeService"

const MyButton = () => {
  const handleClick = () => {
    logEvent('button-click', { 
      component: "MyButton" 
    });
  };

  return <button onClick={handleClick}>Clique em mim</button>
};

export default MyButton;
```

## Exemplos de Eventos Comuns

### Usuário Logado
```javascript
logEvent('usuario_logado', { userId: user.id });
```

### Página Visitada
```javascript
useEffect(() => {
  logEvent('pagina_visitada', { pagina: 'Homepage' });
}, []);
```

### Item Adicionado ao Carrinho
```javascript
logEvent('item_adicionado_carrinho', { produtoId: produto.id, preco: produto.preco });
```

## Contribuição

1. Faça um fork do repositório.
2. Crie uma branch para sua feature (`git checkout -b feature/nova-feature`).
3. Commit suas alterações (`git commit -m 'Adiciona uma nova feature'`).
4. Faça um push para a branch (`git push origin feature/nova-feature`).
5. Abra um Pull Request.

## Licença

Este projeto está licenciado sob a Licença MIT - veja o arquivo [LICENSE](LICENSE) para detalhes.

---

Para mais informações, consulte a [documentação oficial do Amplitude](https://help.amplitude.com/hc/en-us).

Substitua `"SUA_API_KEY_AQUI"` com sua chave de API do Amplitude antes de usar o projeto. Se desejar, ajuste o conteúdo conforme necessário para refletir mais detalhes ou especificidades do seu projeto.
