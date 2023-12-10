### Verificacao
node --version
v20.9.0

### criando

npx create-react-app todo --template typescript

### Build e Conclusao
```bash
yarn build
yarn start
```

### Passo 1: Meu Primeiro App
1) Removi os arquivos originais: App.css, App.test.tsx , App.tsx, index.tsx, logo.svg e setup.Test.ts

### Passo 2: Meu Primeiro App
2) Criei a pasta components e arquivo App.tsx
ou apenas criar pata/arquivo: components/App.tsx

### Passo 3: Adicionado Navbar
3) Criei: components/Navbar.tsx

### Passo 4: Adicionado Menus no Navbar

### Passo 5: Criar models/Todolits.tsx
Alterado App.tsx, adicionado <TodoList></TodoList>
Criado a lista no arquivo src/models/Todolits.tsx
Alterado arquivo para receber a lista src/Todolits.tsx

### Passo 6: Exibindo os intens
Melhornado o src/components/App.tsx - <div className='uk-container'>
Melhornado o src/components/Todolits.tsx
                {
                    todos?.map(
                        todo => (<div key={todo.id}>{todo.title}</div>)
                    )
                }
            </tbody>
