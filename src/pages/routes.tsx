import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import HistoryPage from './History';
import HomePage from './Home';
import SeedlingsPage from './Seedlings';
import SponsorPage from './Sponsor';
import SustentabilityPage from './Sustentability';

function Routes() {
  return (
    <BrowserRouter>
      <Route path="/" exact component={HomePage} />
      <Route path="/mudas" component={SeedlingsPage} />
      <Route path="/historia" component={HistoryPage} />
      <Route path="/patrocine" component={SponsorPage} />
      <Route path="/sustentabilidade" component={SustentabilityPage} />
    </BrowserRouter>
  );
}

export default Routes;
