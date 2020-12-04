import './App.css';
import Form from './components/forms/Form';
import "bootstrap/dist/css/bootstrap.min.css";
import {useForm, FormProvider} from "react-hook-form";
function App() {
  const methods = useForm()
  return (
    <FormProvider {...methods}>
    <div className="container py-4">
      <Form methods={methods}/>
    </div>
    </FormProvider>
  );
}

export default App;
