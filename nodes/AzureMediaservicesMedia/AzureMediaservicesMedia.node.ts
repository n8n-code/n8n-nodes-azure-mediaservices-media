import { NodeConnectionTypes, type INodeType, type INodeTypeDescription } from 'n8n-workflow';


export class AzureMediaservicesMedia implements INodeType {
        description: INodeTypeDescription = {
                displayName: 'Azure Mediaservices Media',
                name: 'N8nDevAzureMediaservicesMedia',
                icon: { light: 'file:./azure-mediaservices-media.png', dark: 'file:./azure-mediaservices-media.dark.png' },
                group: ['input'],
                version: 1,
                subtitle: '={{\$parameter["operation"] + ": " + \$parameter["resource"]}}',
                description: 'Media Services resource management APIs.',
                defaults: { name: 'Azure Mediaservices Media' },
                usableAsTool: true,
                inputs: [NodeConnectionTypes.Main],
                outputs: [NodeConnectionTypes.Main],
                credentials: [
                        {
                                name: 'N8nDevAzureMediaservicesMediaApi',
                                required: true,
                        },
                ],
                requestDefaults: {
                        baseURL: '={{\$credentials.url}}',
                        headers: {
                                Accept: 'application/json',
                                'Content-Type': 'application/json',
                        },
                },
                properties: [
		{
			"displayName": "Resource",
			"name": "resource",
			"type": "options",
			"noDataExpression": true,
			"options": [],
			"default": ""
		},
		
                ],
        };
}
