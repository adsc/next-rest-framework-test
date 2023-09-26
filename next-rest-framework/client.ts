import { NextRestFramework } from 'next-rest-framework';

export const { defineCatchAllApiRoute, defineApiRoute } = NextRestFramework({
   apiRoutesPath: 'pages/api/public',
   swaggerUiPath: '/api/public',
   openApiJsonPath: '/api/public/openapi.json',
   openApiYamlPath: '/api/public/openapi.yaml',
});
