import { Route, Switch, useRouteMatch} from "react-router-dom";
import SectionForm from './SectionForm'
import SectionsList from './SectionsList';

function Sections() {
const {path} = useRouteMatch();

return (
<Switch>
    <Route exact path = {path}>
        <SectionsList />
    </Route>
    
    <Route path={`${path}/new`}>
      <SectionForm />

    </Route>
    <Route path={`${path}/:id/edit`}>
      <SectionForm />
    </Route>

</Switch>



)

}
export default Sections;
