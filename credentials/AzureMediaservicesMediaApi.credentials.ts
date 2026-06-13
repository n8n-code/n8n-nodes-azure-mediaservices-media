import type {
        IAuthenticateGeneric,
        Icon,
        ICredentialType,
        INodeProperties,
} from 'n8n-workflow';

export class AzureMediaservicesMediaApi implements ICredentialType {
        name = 'N8nDevAzureMediaservicesMediaApi';

        displayName = 'Azure Mediaservices Media API';

        icon: Icon = { light: 'file:../nodes/AzureMediaservicesMedia/azure-mediaservices-media.png', dark: 'file:../nodes/AzureMediaservicesMedia/azure-mediaservices-media.dark.png' };

        documentationUrl = '';

        properties: INodeProperties[] = [
          {
                        displayName: 'Base URL',
                        name: 'url',
                        type: 'string',
                        default: '',
                        required: true,
                        placeholder: 'https://api.example.com',
                        description: 'The base URL of your Azure Mediaservices Media API server',
                },
                {
                        displayName: 'API Key',
                        name: 'apiKey',
                        type: 'string',
                        typeOptions: { password: true },
                        default: '',
                        required: false,
                },
        
        ];

  authenticate: IAuthenticateGeneric = {
                type: 'generic',
                properties: {
                        headers: {
                                Authorization: '=Bearer {{$credentials.apiKey}}',
                        },
                },
        };


}
