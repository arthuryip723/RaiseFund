import React from 'react';
import { Button } from 'react-bootstrap';

const CampaignSnippet = ({ campaign }) => (
  <div>Name: {campaign.name}<Button>Remove</Button></div>
);

export default CampaignSnippet;