import {
	ICredentialType,
	NodePropertyTypes,
} from 'n8n-workflow';


export class AsanaApi implements ICredentialType {
	name = 'asanaApi';
	displayName = 'Asana API';
	properties = [
		{
			displayName: 'Access Token',
			name: 'accessToken',
			type: 'string' as NodePropertyTypes,
			default: '',
		},
	];
}
