import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import React, { useState } from 'react';
// import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Autocomplete from '@mui/material/Autocomplete';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import AnimationTitles from '../functions/AnimationTitles';

const faqs = [
  {
    question: 'I have cloud credits; I don’t need PaaS infrastructure. Can you still help?',
    answer: 'Connect your kubernetes clusters and cloud instances to Nife for easy deployments.',
    tags: ['cloud', 'PaaS', 'infrastructure'],
  },
  {
    question: 'I actually need help with creating a docker container. Can you still help?',
    answer: 'With Nife, you can drag and drop your source code archive, select a built-in type and deploy applications. We will auto-dockerize, build and then deploy the containerized application.',
    tags: ['docker', 'container'],
  },
  {
    question: 'My application is monolithic. Can you still help?',
    answer: 'We would love to help you convert a monolith to microservices, we are focussed on containerized applications and deploying applications on kubernetes clusters.',
    tags: ['monolithic', 'microservices', 'kubernetes'],
  },
  {
    question: 'I actually have a CI/CD pipeline established. Can I still use you to deploy applications?',
    answer: 'We work well and have integration with Jenkins, Bitbucket, Travis CI, and GIT actions, and would love to help you with others as well.',
    tags: ['CI/CD', 'Jenkins', 'Bitbucket', 'Travis CI', 'GIT'],
  },
  {
    question: 'I need to use DBs, and deploy DBs. Can you help?',
    answer: 'We currently support MySQL and PostgreSQL, happy to help with other DBs you may have.',
    tags: ['DB', 'MySQL', 'PostgreSQL'],
  },
  {
    question: 'I need to move my applications from GCP to AWS. Can you help?',
    answer: 'Yes, yes, connect both clusters from GCP and AWS and migrate all the applications from one cloud to another. We also help out with on-prem servers migration to cloud as well.',
    tags: ['GCP', 'AWS', 'migration'],
  },
  {
    question: 'No cloud for us, we use bare-metal instances. Can you help?',
    answer: 'Yes, you can connect your host – Bring your own host(BYOH) and move workloads, deploy, or even scale them.',
    tags: ['bare-metal', 'BYOH'],
  },
  {
    question: 'What is Nife used for?',
    answer: 'Nife is used for application deployment, application management, and monitoring in a hybrid cloud environment. Nife provides a simple 4-step process of build, deploy, manage and scale. Know more.',
    tags: ['Nife', 'deployment', 'management', 'monitoring', 'hybrid cloud'],
  },
  {
    question: 'What type of company is Nife?',
    answer: 'Nife is a start-up helping in cutting the complexity of infrastructure by automating the application deployment and managing the complete application lifecycle. We automate DevOps and help with SRE challenges for developers.',
    tags: ['Nife', 'start-up', 'DevOps', 'SRE'],
  },
  {
    question: 'Advantages of using Nife’s Hybrid Cloud Platform?',
    answer: 'Nife helps in the deployment of applications within 5 minutes globally. It also helps in automating key tasks, monitoring, and providing reports for easy access in a secure edge cloud platform, built for any Infrastructure – On-premise, cloud, and 5G. So overall benefit of our platform in a nutshell is that you can deploy your applications in 5 mins, we do provide a latency of fewer than 50 milliseconds and we are live across 500+ locations.',
    tags: ['Nife', 'Hybrid Cloud', 'deployment', 'monitoring', '5G'],
  },
  {
    question: 'What is meant by Private Cloud?',
    answer: 'Private cloud is a cloud computing model where a company or organization leases computing resources from a third-party provider, typically over the Internet, to run their own applications and services. The cloud provider provides the infrastructure, storage, networking, and other services needed to run the customer’s applications. Private clouds are usually hosted on the provider’s own data center, which is typically more secure, and offers greater control and customization.',
    tags: ['Private Cloud', 'computing', 'resources'],
  },
  {
    question: 'What is Edge Computing?',
    answer: 'Edge computing is a distributed computing paradigm that brings computation and data storage closer to the location where it is needed, to improve response times and save bandwidth. It involves putting resources, such as servers and data storage, at the edge of the network, near the source of the data, rather than in a centralized data center. This enables data to be processed more quickly and efficiently, as it does not need to travel as far.',
    tags: ['Edge Computing', 'distributed', 'computation'],
  },
  {
    question: 'What is Cloud Computing?',
    answer: 'Cloud computing is a type of internet-based computing that provides shared computer processing resources and data to computers and other devices on demand. It is a model of computing where resources, software, and information are provided to computers and other devices as a service over the Internet. Cloud computing allows users to access applications and data from any device with an internet connection, and it eliminates the need for users to purchase and maintain their own hardware and software.',
    tags: ['Cloud Computing', 'internet-based', 'computing'],
  },
  {
    question: 'What is a Cloud platform?',
    answer: 'A cloud platform is a set of services, tools, and infrastructure that enables users to develop, deploy, and manage applications and services over the Internet. It provides an environment for users to access data, applications, and services from any device, anywhere in the world. Cloud platforms typically offer scalability, reliability, and security, as well as cost savings.',
    tags: ['Cloud Platform', 'services', 'tools', 'infrastructure'],
  },
  {
    question: 'What is meant by Hybrid Cloud?',
    answer: 'Hybrid cloud is an IT infrastructure design that integrates a company’s internal IT resources with third-party cloud provider infrastructure and services. With a hybrid cloud, you can store your data and run your applications across multiple environments. Your hybrid cloud environment helps you provision, scale, and centrally manage your compute resources. Visit our page to learn more!',
    tags: ['Hybrid Cloud', 'IT infrastructure', 'resources'],
  },
  {
    question: 'What do you mean by Public Cloud?',
    answer: 'A public cloud is a type of cloud computing where resources, such as computing power, storage, and applications, are made available to the public on the Internet, rather than being hosted on private servers. It is generally used by businesses, organizations, and individuals who don’t want to invest in the hardware and software needed to run their own private cloud.',
    tags: ['Public Cloud', 'cloud computing', 'resources'],
  },
];

const uniqueTags = [...new Set(faqs.flatMap(faq => faq.tags))];

const FAQ = () => {
  const [visibleItems, setVisibleItems] = useState(5);
  const [selectedTags, setSelectedTags] = useState([]);

  const showMoreItems = () => {
    setVisibleItems(prevVisibleItems => prevVisibleItems + 5);
  };

  const handleTagChange = (event, newTags) => {
    setSelectedTags(newTags);
  };

  const filteredFaqs = faqs.filter(faq => {
    if (selectedTags.length === 0) return true;
    return selectedTags.some(tag => faq.tags.includes(tag));
  });

  return (
    <div
      style={{
        width: '100%',
        maxWidth: '800px',
        margin: '0 auto',
        padding: '20px',
        marginTop:"40px",
      }}
    >
    <h2      className="title mx-auto text-align-center gradient-text fw-bold">
    FAQ! Need help?
    </h2>
  
 
      <p className="gray-50 text-center my-4">
          Frequently Asked Questions - We got you covered!
          </p>
      <Autocomplete
        multiple
        options={uniqueTags}
        getOptionLabel={(option) => option}
        onChange={handleTagChange}
        renderInput={(params) => (
          <TextField
            {...params}
            variant="outlined"
            placeholder="Ask your question"
          />
        )}
        sx={{ mb: 2 }}
      />
      {filteredFaqs.slice(0, visibleItems).map((faq, index) => (
        <Accordion
          style={{
            margin: '10px 0',
        
            borderRadius: '8px',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
          }}
          key={index}
        >
          <AccordionSummary
            expandIcon={<svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M0 0h24v24H0z"></path><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 13.5L7.5 11l1.42-1.41L12 12.67l3.08-3.08L16.5 11 12 15.5z"></path></svg>}
            aria-controls={`panel${index}-content`}
            id={`panel${index}-header`}
          >
            <Typography style={{ fontWeight: 'normal' }}>{faq.question}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography variant='body2' sx={{opacity:0.7}}>{faq.answer}</Typography>
          </AccordionDetails>
        </Accordion>
      ))}
      {visibleItems < filteredFaqs.length && (
        <Button fullWidth variant="text" onClick={showMoreItems}>
          Show More
        </Button>
      )}
    </div>
  );
};

export default FAQ;
