import { CheckCircle, OpenInNew } from '@mui/icons-material';
import { Box, Button, Divider, Grid, Paper, Step, StepContent, StepLabel, Stepper, SvgIcon, Typography } from '@mui/material';
import React from 'react';
import OikosLogo from "../../images/logo/OikosDark.svg";

const CircleIcon = () => (
    <SvgIcon>
        <circle cx="12" cy="12" r="5" fill="currentColor" />
    </SvgIcon>
);

function ChangeLog() {
    return (
  
     
        <Box>
            <Box>
                <Grid container>
                    {/* Left Fixed Sidebar */}
                    <Grid item xs={12} md={3} sx={{ bgcolor: 'background.paper', padding: 2, borderRight: { md: '1px solid #ddd' } }}>
                        <Box my={2}>
                            <Button endIcon={<OpenInNew />}>
                                Nife Docs
                            </Button>
                        </Box>
                        <Box>
                            <Typography variant="body1">
                                A changelog (also spelled change log) is a log or record of all notable changes made to a nife products. The changelog usually includes records of changes such as bug fixes, new features, etc.
                            </Typography>
                        </Box>
                        <Box>
                            <Typography sx={{ fontWeight: "bold", mt: 2 }}>Products</Typography>
                            <Paper variant="outlined" sx={{ textAlign: "center", borderRadius: "12px",border:4, borderColor: "primary.main", py: 0.5, my: 1, cursor: "pointer" }}>
                                <img src={OikosLogo} style={{ height: "50px", width: "auto" }} />
                            </Paper>
                         

                        </Box>
                    </Grid>

                    {/* Right Scrollable Content */}
                    <Grid item xs={12} md={9} sx={{ padding: 2, height: { xs: 'auto', md: '99vh' }, overflowY: { md: 'auto' } }}>
                        <Typography variant="h4" gutterBottom>
                            Change Log
                        </Typography>
                        <Divider />
                        <Box mt={2}>
                            {/* Stepper Component for Change Log Entries */}
                            <Stepper orientation="vertical">
                                {changeLogs.map((log, index) => (
                                    <Step key={index} active={true}>
                                        <StepLabel optional={
                                            <Typography variant="caption">{log.date}</Typography>
                                        } StepIconComponent={CircleIcon}>
                                            <Typography variant='h6' sx={{ fontWeight: "bold" }}>Oikos production {log.title}</Typography></StepLabel>
                                        <StepContent>
                                            <Box>
                                                {log.description.map((e) => {
                                                    return <>
                                                        <Typography variant="body1" sx={{ mb: 1 }}>
                                                           
                                                            <CheckCircle style={{fontSize:"12px",color:"green"}}/> {e.title}
                                                        </Typography> </>
                                                })}
                                            </Box>

                                        </StepContent>
                                    </Step>
                                ))}
                            </Stepper>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </Box>
    
    );
};

// Sample change log data
const changeLogs = [
    {
        date: '27—09—2024',
        type: "prod",
        title: "v0.0.37",
        for: "Oikos",
        description: [{ "type": "🚀 New", "title": 'Now Instant Rollback for sites' },{ "type": "🚀 New", "title": 'Redployment for sites' },{ "type": "🚀 New", "title": 'CI/CD for sites' }],
    },
    {
        date: '26—07—2024',
        type: "prod",
        title: "v0.0.30",
        for: "Oikos",
        description: [{ "type": "🚀 New", "title": 'Create and deploy Database with MySQL, Postgres, MongoDB, MariaDB and Redis' }],
    },
    {
        date: '18—07—2024',
        type: "prod",
        title: "v0.0.29",
        for: "Oikos",
        description: [
            { "type": "🚀 New", "title": 'Code Scan - Detect secrets before they leak' },
            { "type": "🚀 New", "title": 'Monitor app with Uptime status' },
            { "type": "🚀 New", "title": 'Monitor app with DORA metrics' },
            { "type": "🚀 New", "title": 'Monitor app and sites with Speed Insights' },
        ],
    },
    {
        date: '29—02—2024',
        type: "prod",
        title: "v0.0.10",
        for: "Oikos",
        description: [{ "type": "🚀 New", "title": 'Added new feature Site deployment' }],
    },
    {
        date: '29—12—2023',
        type: "prod",
        title: "v0.0.9",
        for: "Oikos",
        description: [
            { "type": "🚀 New", "title": 'Slack notification — Get nife account notifications at your slack channel' },
            { "type": "☑️ Updated", "title": 'GCP support for Platus — User can add GCP along with AWS for Platus ( Cost Monitoring )' },
            { "type": "☑️ Updated", "title": 'Download config.toml — Download config.toml of apps' },
            { "type": "☑️ Updated", "title": 'App configuration with docker run command — Autofill app configuration details with docker run command' },
        ],
    },
    {
        "date": "28—11—2023",
        "type": "prod",
        "title": "v0.0.8",
        "for": "Oikos",
        "description": [
            { "type": "🚀 New", "title": "Advanced filter for user activities — Users can filter activity based on activity type and activity event" },
            { "type": "☑️ Updated", "title": "Standalone server — Nife Standalone deployment on Orel cloud" }
        ]
    },
    {
        "date": "1—11—2023",
        "type": "prod",
        "title": "v0.0.7",
        "for": "Oikos",
        "description": [
            { "type": "🚀 New", "title": "Improved RBAC — Refined RBAC with Admin, Member, and Viewer Roles. Admins manage, members collaborate, and viewers observe, ensuring precise control over user permissions and security." },
            { "type": "☑️ Updated", "title": "Onboarding quickstart — [FOR NIFE] Quickly configure account and make bulk changes to streamline initial configuration and sales demo" },
            { "type": "☑️ Updated", "title": "Dockerfile path support — Seamlessly manage and switch between Dockerfile paths for production, development, and staging environments, ensuring versatility in container deployments" }
        ]
    },
    {
        "date": "27—09—2023",
        "type": "prod",
        "title": "v0.0.6",
        "for": "Oikos",
        "description": [
            { "type": "🚀 New", "title": "Advance github deployment — User can select and deploy app right from private/public repository" },
            { "type": "☑️ Updated", "title": "Standalone cluster for BYOC — Add your standalone cluster and use it to deploy app and database" },
            { "type": "☑️ Updated", "title": "Custom datadog metrics — User can add their datadog details for metrics" },
            { "type": "☑️ Updated", "title": "UI/UX — Enhanced UI/UX for better and faster experience" }
        ]
    },
    {
        "date": "30—08—2023",
        "type": "prod",
        "title": "v0.0.5",
        "for": "Oikos",
        "description": [
            { "type": "🚀 New", "title": "Workload regions — Users can add the regions to the workload and deploy the application in the workload region" },
            { "type": "☑️ Updated", "title": "BYOC access — Members with user role can view and deploy in the BYOC regions added by the Admin" },
            { "type": "☑️ Updated", "title": "Merge workload — Users can merge their deployed application to the non—deployed (New) Application" },
            { "type": "☑️ Updated", "title": "Public repo github — Suggesting users to build from the public repository github" }
        ]
    },
    {
        "date": "31-07-2023",
        "type": "prod",
        "title": "v0.0.4",
        "for": "Oikos",
        "description": [
            { "type": "🚀 New", "title": "UI Optimization - Enhanced UI/UX and optimized performance" },
            { "type": "☑️ Updated", "title": "Environment Variables for redeploy - User can add environment variables for Redeploy apps" },
            { "type": "☑️ Updated", "title": "Workload for non deployed apps - Promote deployed apps to non deployed apps using workload" },
            { "type": "☑️ Updated", "title": "BYOC(Bring your own cluster) - User can add Byoc clusters using the nife CLI" }
        ]
    },
    {
        "date": "01-07-2023",
        "type": "prod",
        "title": "v0.0.3",
        "for": "Oikos",
        "description": [
            { "type": "🚀 New", "title": "Github PAT - User can deploy their App from Private GitHub repository to our platform" },
            { "type": "☑️ Updated", "title": "BYOC for GCP and Azure - User can add bring your own cluster (BYOC) and use it to deploy apps and database" },
            { "type": "☑️ Updated", "title": "DB Volume - User can add Custom Volume size for database" }
        ]
    },
    {
        "date": "02-06-2023",
        "type": "prod",
        "title": "v0.0.2",
        "for": "Oikos",
        "description": [
            { "type": "🚀 New", "title": "BYOC for AWS - User can add bring your own cluster (BYOC) and use it to deploy apps and database" },
            { "type": "☑️ Updated", "title": "Deployment logs - User can see deployment logs for Remote build and Built-In" },
            { "type": "☑️ Updated", "title": "Database - A separate workflow to deploy postgres and mysql database" }
        ]
    },
    {
        "date": "29-04-2023",
        "type": "prod",
        "title": "v0.0.1",
        "for": "Oikos",
        "description": [
            { "type": "🚀 New", "title": "Multiple default regions - Users can select multiple default regions for organization which is used to deploy their app in multiple regions while deploying" },
            { "type": "☑️ Updated", "title": "DockerFile path - Dockerfile path for specific file deployment from remote build and Github" },
            { "type": "☑️ Updated", "title": "Requested Locations - Users can see status of requested locations" },
            { "type": "☑️ Updated", "title": "UI/UX - Moved instances inside locations tab and libraries under settings" }
        ]
    }
    , {
        "date": "23-03-2023",
        "type": "prod",
        "title": "v0.0.0",
        "for": "Oikos",
        "description": [
            { "type": "🚀 New", "title": "Azure Instance - Users can start or stop their Azure instance by connecting it to our Nife platform" },
            { "type": "☑️ Updated", "title": "Organization Migration - Users have the option of moving resources from one Organization to another Organization" },
            { "type": "☑️ Updated", "title": "DataDog Enhancements - Updated App metrics with multiple graphs" },
            { "type": "☑️ Updated", "title": "Users Application can be managed by Admin - Allowing Admin to access and delete User Applications" },
            { "type": "☑️ Updated", "title": "Https Setup - Https support for Applications" },
            { "type": "☑️ Updated", "title": "Delete selected apps - Users can delete multiple apps by selecting the apps in the Apps page" }
        ]
    },
    {
        "date": "23-02-2023",
        "type": "prod",
        "title": "v0.0.9",
        "for": "Oikos",
        "description": [
            { "type": "🚀 New", "title": "Built-in - We have added unity in our built-ins. Users can deploy their Unity application on our platform." },
            { "type": "🚀 New", "title": "Replicas - Users can set up their Kubernetes Replicas while creating the Application using the Nife UI and CLI." },
            { "type": "🚀 New", "title": "Deploying in sub-organization regions - Users can use sub-organization regions to deploy applications in sub-organizations." },
            { "type": "🚀 New", "title": "Email Alerts - Email will be sent to customers (Admin) when the invited user deploys an application." },
            { "type": "🚀 New", "title": "Modified Activity - Show activities for Workloads, Instance, Redeploy, Business Unit and sub organization." },
            { "type": "🚀 New", "title": "Announcement - Announcement feature to share Roadmap with customers and take ideas." },
            { "type": "🚀 New", "title": "Delete All Organization - All applications, sub organizations, business units, and workload contained therein will also be deleted if the organization is deleted." }
        ]
    },
    {
        "date": "24-01-2023",
        "type": "prod",
        "title": "v0.0.8",
        "for": "Oikos",
        "description": [
            { "type": "New", "title": "Bug Fix: Personal Information_Text boxes are not cleared after saving the details" },
            { "type": "New", "title": "Bug Fix: Workload Tab is not visible in dark mode" },
            { "type": "New", "title": "Bug Fix: User guide displayed also for not first time user account (already logged in many times)" },
            { "type": "New", "title": "Bug Fix: Workload Tab_Workloads are not deleted when we delete the org in which these workloads are associated with" },
            { "type": "New", "title": "Bug Fix: Guided tours for new users" },
            { "type": "New", "title": "Bug Fix: Workload Tab_Workload is not applicable for free and silver plan accounts" },
            { "type": "New", "title": "Bug Fix: Complete your profile message is displaying at all times under Profile even though profile is updated" },
            { "type": "New", "title": "Bug Fix: Registration_Wrong validation message displayed for Password field" },
            { "type": "New", "title": "Bug Fix: Update Registration_Phone number got displayed incorrectly" },
            { "type": "New", "title": "Bug Fix: Update Registration_While editing the personal information in Profile tab, there are 2 save and cancel buttons" },
            { "type": "New", "title": "Bug Fix: Instance should be displayed with Upgrade plan message in User Analytics page for free plan" },
            { "type": "New", "title": "Bug Fix: Separate Workload tab in sidebar" },
            { "type": "New", "title": "Bug Fix: Update  Registration" },
            { "type": "New", "title": "Bug Fix: Attach Volume is not visible in dark mode" },
            { "type": "New", "title": "Bug Fix: App, Org, Sub-org, BU and Instance counts are not displayed" },
            { "type": "New", "title": "Bug Fix: If the app is deploying from Git and the remote build fails then the Try again option is not working" },
            { "type": "New", "title": "Bug Fix: If github repo name doesn't have .git in the end => its a normal URL, deploy fails with a generic error" },
            { "type": "New", "title": "Bug Fix: When deleting business unit it displays delete organization." },
            { "type": "New", "title": "Bug Fix: Internal server error came when deploying mysql built in type" },
            { "type": "New", "title": "Bug Fix: as a hook" },
            { "type": "New", "title": "Bug Fix: No error message popped up when tried to create new SO with existing SO name" },
            { "type": "New", "title": "Bug Fix: Inappropriate error message received while creating org for gold account" },
            { "type": "New", "title": "Bug Fix: Unable to deploy app in any of the accounts" },
            { "type": "New", "title": "Bug Fix: Internal server error thrown while adding GCP instance" },
            { "type": "New", "title": "Bug Fix: Error message thrown when tried to update the credentials of docker hub registry type secrets in Secrets page" },
            { "type": "New", "title": "Bug Fix: Edit option should not be there for mysql and postgres registry type secrets" },
            { "type": "New", "title": "Bug Fix: Able to create more than one secret with same name and same set of values" },
            { "type": "New", "title": "Bug Fix: Notification count increases when clicked on Mark All as Read" },
            { "type": "New", "title": "Bug Fix: App name error when deploying the app." },
            { "type": "New", "title": "Bug Fix: Notification Number should reset as soon as notification is Seen." },
            { "type": "New", "title": "Bug Fix: Read More about Deployments link is not working." },
            { "type": "New", "title": "Bug Fix: Mandatory fields in Edit config Template pop up are not validated." },
            { "type": "New", "title": "Bug Fix: UI search button is not uniform in all the pages" },
            { "type": "New", "title": "Bug Fix: Deploy Error when Deployed from Market Place." },
            { "type": "New", "title": "Bug Fix: The Mandatory fields are not validated in the Account Details Page." }
        ]
    },
    {
        "date": "28-12-2022",
        "type": "prod",
        "title": "v0.0.7",
        "for": "Oikos",
        "description": [
            { "type": "🚀 New", "title": "Task: User Analytics in UI" },
            { "type": "🚀 New", "title": "Task: Activity option for users" },
            { "type": "🚀 New", "title": "Task: Update Scale Component in UI for byoh locations." },
            { "type": "🚀 New", "title": "Task: Volume option for application." },
        ]
    },
    {
        "date": "28-12-2022",
        "type": "prod",
        "title": "v0.0.6",
        "for": "Oikos",
        "description": [
            { "type": "🚀 New", "title": "[Global Variables] Set registry type as None to create Global Variable redundant information of UI " },
            { "type": "🚀 New", "title": "User type in profile" },
            { "type": "🚀 New", "title": "Modify Delete app mutation to delete Mysql and Postgresql." }
        ]
    },
    {
        "date": "28-11-2022",
        "type": "prod",
        "title": "v0.0.5",
        "for": "Oikos",
        "description": [
            { "type": "🚀 New", "title": "Task: Location page for BYOH" },
            { "type": "🚀 New", "title": "Task: Detail App View in Marketplace" },
            { "type": "🚀 New", "title": "Task: Animation for move, scale and deployment." },
            { "type": "🚀 New", "title": "Bug fix: Not able to Create Aws Instance." },
        ]
    },
    {
        "date": "26-10-2022",
        "type": "prod",
        "title": "v0.0.4",
        "for": "Oikos",
        "description": [
            { "type": "🚀 New", "title": "Move applications to BYOH fails but the drop down list has the BYOH application name" },
            { "type": "🚀 New", "title": "UI Components size and information different on different pages" },
            { "type": "🚀 New", "title": "[ER] Location page for BYOH." },
            { "type": "🚀 New", "title": "Global Activity." },
            { "type": "🚀 New", "title": "More details for UI logs." },
        ]
    },
    {
        "date": "08-10-2022",
        "type": "prod",
        "title": "v0.0.3",
        "for": "Oikos",
        "description": [
            { "type": "🚀 New", "title": "Added more Apps to the Nife Marketplace" },
            { "type": "🚀 New", "title": "Added Logs for UI" },
            { "type": "🚀 New", "title": "[ER] Config template edit option and view options." },
            { "type": "🚀 New", "title": "Bitbucket." },
            { "type": "🚀 New", "title": "Dark mode for Teamboard." },
        ]
    },
    {
        "date": "26-07-2022",
        "type": "prod",
        "title": "v0.0.2",
        "for": "Oikos",
        "description": [
            { "type": "🚀 New", "title": "Registration for students in teamboard" },
            { "type": "🚀 New", "title": "Customer Logo on the portal" },
            { "type": "🚀 New", "title": "Disable Graphql Introspection for vulnerability" },
            { "type": "🚀 New", "title": "Global Activity." },
            { "type": "🚀 New", "title": "Graph QL APIs should not be accessible without a valid session token/user name password." },
        ]
    },
    {
        "date": "26-06-2022",
        "type": "prod",
        "title": "v0.0.1",
        "for": "Oikos",
        "description": [
            { "type": "🚀 New", "title": "Application orchestration - Move, suspend, delete, tracked in activities" },
            { "type": "🚀 New", "title": "Bug fix: New App created using a free sign up, App is not getting launched /opening on browser" },
            { "type": "🚀 New", "title": "Handle App Quota for free plan users in Backend." },
            { "type": "🚀 New", "title": "Organization Chart showing same data for all Users." },
            { "type": "🚀 New", "title": "Fixed Customer Setup." },
        ]
    },
    {
        "date": "25-05-2022",
        "type": "prod",
        "title": "v0.0.0",
        "for": "Oikos",
        "description": [
            { "type": "🚀 New", "title": "Ability to deploy private github registry repo in NIFE UI" },
            { "type": "🚀 New", "title": "Bug fix: Config template delete " },
            { "type": "🚀 New", "title": "Validate all Popular Apps in UI." },
            { "type": "🚀 New", "title": "Update Locations." },
            { "type": "🚀 New", "title": "UI Bugs." },
        ]
    },










];






export default ChangeLog;


