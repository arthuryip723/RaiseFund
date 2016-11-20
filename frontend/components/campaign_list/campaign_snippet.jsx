import React from 'react';
import { Link } from 'react-router';
import { Button } from 'react-bootstrap';

const CampaignSnippet = ({ campaign }) => (
  <div><Link to={`/campaigns/${campaign.id}`}>Name: {campaign.name}</Link><Button>Remove</Button></div>
);

export default CampaignSnippet;