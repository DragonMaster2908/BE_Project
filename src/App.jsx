import LoginComponent from './components/login.jsx';

const mode = 'login';

const app = () => (
    <div className={`app app--is-${mode}`}>
        <LoginComponent
            mode={mode}
        />
    </div>
);

export default app;