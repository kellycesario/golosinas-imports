# Especificações do Projeto

<span style="color:red">Pré-requisitos: <a href="01-Documentação de Contexto.md"> Documentação de Contexto</a></span>

## Arquitetura e Tecnologias
A arquitetura da aplicação será dividida entre um módulo de frontend e um módulo de backend. Optamos por não adicionar uma aplicação mobile por não julgar necessário ao contexto do cliente. 
O backend da aplicação também se comunicará com um CMS (content management system), que será responsável por armazenar e fornecer dados dos produtos ao backend da aplicação, que por sua vez irá gerenciar os dados recebidos e fornecê-los ao frontend. Além disso, o backend também será responsável pela autenticação de administradores do site, que podem adicionar e remover produtos.
Para o frontend, optamos por utilizar **React, Typescript e Next.js**. No backend, utilizaremos **Typescript, Express** e **MongoDB** como base de dados.
O frontend da aplicação será hospedado na **Vercel** e o backend, no **Fly.io**. O banco de dados será em nuvem, através do **MongoDB Atlas**.

```mermaid
graph TD
  subgraph Frontend
    A[Usuário]
    B[Interface do Usuário]
    A -->|Visualiza| B
  end

  subgraph "Contentful"
    C[Posts]
    D[Produtos]
    E[Contentful]
    B -->|Recebe conteúdo| C
    B -->|Recebe conteúdo| D
    C -->|Fornece conteúdo| E
    D -->|Fornece conteúdo| E
  end

  subgraph "Base de Dados"
    F[Dados de Autenticação]
  end

  B -->|Autenticação| F
```
## Project Model Canvas
![PMC](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e5-proj-empext-t4-pmv-ads-2024-1-e5-golosinas-imports/assets/81396458/7b0b7681-5a88-45dc-b630-d229fd197d82)


## Business Model Canvas
![BMC-A](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e5-proj-empext-t4-pmv-ads-2024-1-e5-golosinas-imports/assets/81396458/cba1d15a-0c08-449c-abd6-78510390a5f3)

> O BMC também está disponível neste <a href="https://next.canvanizer.com/canvas/rFO5QtCGUN2x7"> link </a>

## Requisitos

### Requisitos Funcionais

| ID    | Descrição do Requisito                                              | Prioridade |
|-------|---------------------------------------------------------------------|------------|
| RF-001| O site deve exibir os produtos vendidos pela empresa;                | ALTA       |
| RF-002| O site deve exibir informações sobre os produtos, como nome, fabricante e preço; | ALTA |
| RF-003| O site deve permitir a busca de produtos pelo nome ou faixa de preço; | ALTA       |
| RF-004| O site deve conter uma seção com informações sobre a empresa;        | ALTA       |
| RF-005| O site deve conter uma seção de contato, onde os usuários possam realizar os pedidos diretamente com o vendedor; | ALTA |
| RF-006| O site deve apresentar uma seção de feedbacks e permitir o envio de feedbacks dos clientes; | ALTA |
| RF-007| O site deve incluir uma seção de blog com artigos postados regularmente sobre tópicos relacionados à culinária; | ALTA |
| RF-008| Para comentar nos artigos do blog, os usuários devem se registrar e fazer login em suas contas; | ALTA |
| RF-009| Os usuários registrados devem ter a capacidade de editar as informações de sua conta, incluindo nome e informações de contato; | ALTA |
| RF-010| Os usuários registrados também devem ter a opção de excluir suas contas, se desejarem; | ALTA |
| RF-011| O site deve incluir uma seção dedicada de Perguntas Frequentes (FAQ) onde os usuários possam encontrar respostas para dúvidas comuns relacionadas a produtos, pedidos, políticas de envio, entre outros; | MÉDIA |
| RF-012| O site deve incluir botões de compartilhamento para permitir que os usuários compartilhem produtos específicos ou artigos do blog em suas redes sociais; | MÉDIA |
| RF-013| O site deve oferecer a opção para os usuários se inscreverem em notificações sobre novos produtos. | BAIXA      |


### Requisitos não Funcionais

| ID    | Descrição do Requisito                                                         | Prioridade |
|-------|-------------------------------------------------------------------------------------|------------|
| RNF-01| A aplicação deve ser acessível, de acordo com as métricas da extensão Lighthouse;    | ALTA       |
| RNF-02| A aplicação deve atender as métricas de SEO da extensão Lighthouse, para atingir o público-alvo; | ALTA |
| RNF-03| A aplicação deve contar com um sistema PWA, para atender aos clientes que preferem uma experiência similar a de aplicativos; | ALTA |
| RNF-04| A linguagem em que a aplicação será desenvolvida deve ser Typescript;               | ALTA       |
| RNF-05| A aplicação deve ser otimizada para ter um desempenho rápido e responsivo;         | ALTA       |
| RNF-06| O site deve apresentar as informações de forma clara e concisa.                   | ALTA       |

## Restrições

O projeto está restrito pelos itens apresentados na tabela a seguir.

|ID| Restrição                                             |
|--|-------------------------------------------------------|
|01| O projeto deverá ser entregue até o final do semestre |
|02| Somente administradores podem realizar login na aplicação        |

## Diagrama de Casos de Uso

Temos dois casos de uso principais para o site, com dois atores distintos: usuário comum e administrador.
### Usuário
![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e5-proj-empext-t4-pmv-ads-2024-1-e5-golosinas-imports/assets/103083123/d6dcb0a9-28cc-4cb7-a033-9c4d09dd9f4c)

### Administrador
Caso de uso 1: plataforma (site)
![admin](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e5-proj-empext-t4-pmv-ads-2024-1-e5-golosinas-imports/assets/81396458/3fd03cdf-f0d2-40b7-bb5a-91c95b9de6fc)

Caso de uso 2: alterações de posts e produtos através do CMS
![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e5-proj-empext-t4-pmv-ads-2024-1-e5-golosinas-imports/assets/103083123/ca7bf483-36d8-4473-a8c7-6987d9c16fdc)


## Modelo ER (Projeto Conceitual)

![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e5-proj-empext-t4-pmv-ads-2024-1-e5-golosinas-imports/assets/103083123/68d299c2-a01c-4fcd-8f5c-24c9e0eb919a)


## Projeto da Base de Dados

![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e5-proj-empext-t4-pmv-ads-2024-1-e5-golosinas-imports/assets/103083123/40d3eead-3be9-4483-bc95-c8a24ac1b595)

## Modelagem de Dados no Contentful
Aqui encontra-se a modelagem de dados dos três content_types presentes no Contentful: Product (produto), Characteristics (características) e Blog Post (artigo). Em cada content_type há um campo de 'internalName', uma prática recomendada pela plataforma para facilitar a localização de itens publicados.

![modelagem-contentful](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e5-proj-empext-t4-pmv-ads-2024-1-e5-golosinas-imports/assets/81396458/6650b2f5-5de4-4933-adc4-66ee4521895e)


## Gerenciamento

![2](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e5-proj-empext-t4-pmv-ads-2024-1-e5-golosinas-imports/assets/81396458/064320e3-18a0-4a0d-92f9-5bbe3f672da2)

![1](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e5-proj-empext-t4-pmv-ads-2024-1-e5-golosinas-imports/assets/81396458/530b7abb-7bfa-49cd-9f87-de397f31ce46)

