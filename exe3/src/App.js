import InsertData from './components/InsertData';
import EmployeesProvider from './context/EmployeesContext';
import EmployeesList from './components/EmployeesList';

function App() {
  return (
    
    <EmployeesProvider>
      <InsertData />
      <hr />
      <EmployeesList />
    </EmployeesProvider>

  );
}

export default App;