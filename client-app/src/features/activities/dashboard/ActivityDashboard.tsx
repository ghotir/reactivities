import React, { useContext } from "react";
import { Grid } from "semantic-ui-react";
import ActivityList from "./ActivityList";
import {observer} from 'mobx-react-lite';
import ActivityStore from '../../../app/stores/activityStore'

const ActivityDashboard: React.FC = () => {
  const activityStore = useContext(ActivityStore);
  const {submitting, target} = activityStore;

  return (
    <Grid>
      <Grid.Column width={10}>
        <ActivityList
          submitting={submitting}
          target={target}
        />
      </Grid.Column>
      <Grid.Column width={6}>
        <h2>Activity filters</h2>
      </Grid.Column>
    </Grid>
  );
};

export default observer(ActivityDashboard)