const portugueseWorklist = [
	{
		name: 'CredAluga',
		role: 'Software Engineer II',
		date: 'Jan/2023',
		description: `Criação e evolução de Design System e componentes reutilizáveis; refatoração e padronização de telas e comunicação com APIs; desenvolvimento de produtos Wallet/CredPoupa; code reviews e otimizações.`,
		detailedDescription: `Stack: Next.js, React, TypeScript, API Routes, Services Pattern, Design System.
Criação e evolução do Design System Front-End, aumentando a reutilização de componentes em 45%.
Desenvolvimento e migração de componentes para padrão unificado, reduzindo retrabalho em 30%.
Lançamento de novos produtos (Wallet e CredPoupa), com entrega de MVPs em ciclos 20% mais rápidos.
Refatoração da camada de APIs com padrão de Services e API Routes do Next.js, reduzindo falhas de integração em 25%.
Atuação contínua em code review e melhorias de arquitetura, elevando qualidade de código e previsibilidade de entregas.
Uso diário de AI Coding (GitHub Copilot, Cursor e Claude) para acelerar prototipação, refatoração e revisão técnica.`
	},
	{
		name: 'Grupo Via Máquinas II',
		role: 'Software Engineer II',
		date: 'Set/2025 - Dez/2026',
		description: `Migração React Native+Expo para TypeScript; implementação de chat em tempo real (texto/áudio/imagem) com WebSocket; paginação/cache com TanStack Query; atualização de dependências, integração com nova API e deploy para Play Store.`,
		detailedDescription: `Stack: React Native, Expo, TypeScript, TanStack Query, WebSocket.
Principal desenvolvedor na migração React Native + Expo de JavaScript para TypeScript, alcançando cobertura de tipagem em 90% da base.
Liderança na implementação de chat em tempo real (texto, áudio e imagem) com WebSocket, reduzindo latência percebida em 35%.
Implementação de paginação e cache com TanStack Query, reduzindo consumo de dados em 28%.
Atualização de React Native e Expo para versões mais recentes, diminuindo incidentes de build/release em 40%.
Build e deploy para Google Play Store com melhoria do ciclo de publicação em 30%.
Aplicação de Copilot, Cursor e Claude no suporte à migração de código, debugging e revisão de PRs.`
	},
	{
		name: 'Codgo.X',
		role: 'Software Engineer II',
		date: 'Dez/2023 - Set/2025',
		description: `Migração de legacy ASPX para React + Microfrontends; desenvolvimento responsivo em React/TypeScript com Material UI; otimizações de performance e estado com React Query; adoção de testes, CI/CD e app mobile com Expo.`,
		detailedDescription: `Stack: React, TypeScript, Material UI, Microfrontends, React Query, CI/CD.
Liderança em migração de sistema legado de crédito (ASPX) para React + Microfrontends, com redução de tempo de manutenção em 32%.
Desenvolvimento de páginas responsivas com React, TypeScript e Material UI, elevando score de usabilidade interna em 20%.
Otimização de performance com React Hooks, reduzindo tempo médio de carregamento em 6%.
Gerenciamento de estado com Context API e React Query, reduzindo chamadas redundantes em 22%.
Atuação em testes automatizados e pipelines CI/CD, melhorando estabilidade de release.
Uso recorrente de ferramentas de IA (Copilot, Cursor e Claude) para acelerar entregas e melhorar qualidade de código.`
	},
	{
		name: 'Tracken',
		role: 'Software Engineer II',
		date: 'Ago/2023 - Dez/2023',
		description: `Migração de apps Angular+Ionic para React Native; melhorias de UX/UI; configuração de push e publicação nas lojas; integração com Mercado Livre/Shopee; implementação de impressão de etiquetas.`,
		detailedDescription: `Stack: React Native, APIs REST, Push Notifications, Publicação Play Store/App Store.
Migração de aplicações Angular + Ionic para React Native com melhoria de fluidez e UX.
Melhorias de UX/UI nos apps Tracken Vendedor e Tracken Operação.
Configuração de Push Notifications e publicação na Google Play Store e Apple App Store.
Integração com APIs de marketplaces (Mercado Livre e Shopee).
Desenvolvimento de funcionalidade de impressão de etiquetas para processos logísticos.`
	},
	{
		name: 'Uuhuw Software House',
		role: 'Software Engineer',
		date: 'Fev/2022 - Jun/2023',
		description: `Responsabilidades:Responsável pelo desenvolvimento e manutenção de diversas funcionalidades do Front-End React; Habilidades: React, Typescript, StyledComponents, Sass, Axios, SweetAlert2, ReactApexCharts, React GoogleMapsApi, Bootstrap.`,
		detailedDescription: `Stack: React, TypeScript, React Native, Redux, Context API, React Query, Axios.
Migração de sistema internacional em PHP para React + TypeScript.
Desenvolvimento da versão mobile com React Native, foco em acessibilidade e usabilidade.
Atuação em liderança técnica, boas práticas e otimização de código.
Refatoração com React Hooks (useCallback, useMemo e memo) para ganho de performance.
Gerenciamento de estado global com Redux e Context API.
Integração de APIs com Axios e React Query.`
	}
];

const englishWorklist = [
	{
		name: 'CredAluga',
		role: 'Software Engineer II',
		date: 'Jan/2023',
		description:
			'Design System and reusable component creation/evolution; screen refactoring/standardization and API communication; Wallet/CredPoupa product development; code reviews and optimizations.',
		detailedDescription: `Stack: Next.js, React, TypeScript, API Routes, Services Pattern, Design System.
Created and evolved the Front-End Design System, increasing component reuse by 45%.
Developed and migrated components to a unified standard, reducing rework by 30%.
Delivered new products (Wallet and CredPoupa), shipping MVPs in cycles 20% faster.
Refactored the API layer with Services Pattern and Next.js API Routes, reducing integration failures by 25%.
Continuous work on code reviews and architecture improvements, increasing code quality and delivery predictability.
Daily use of AI coding tools (GitHub Copilot, Cursor, and Claude) to speed up prototyping, refactoring, and technical reviews.`
	},
	{
		name: 'Grupo Via Máquinas II',
		role: 'Software Engineer II',
		date: 'Sep/2025 - Dec/2026',
		description:
			'Migrated React Native + Expo to TypeScript; implemented real-time chat (text/audio/image) with WebSocket; pagination/cache with TanStack Query; dependency updates, new API integration, and Play Store release.',
		detailedDescription: `Stack: React Native, Expo, TypeScript, TanStack Query, WebSocket.
Led the migration of a React Native + Expo codebase from JavaScript to TypeScript, reaching 90% typed coverage.
Led implementation of real-time chat (text, audio, and image) with WebSocket, reducing perceived latency by 35%.
Implemented pagination and caching with TanStack Query, reducing data consumption by 28%.
Updated React Native and Expo to newer versions, decreasing build/release incidents by 40%.
Built and deployed to Google Play Store, improving publication cycle time by 30%.
Applied Copilot, Cursor, and Claude to support code migration, debugging, and PR review.`
	},
	{
		name: 'Codgo.X',
		role: 'Software Engineer II',
		date: 'Dec/2023 - Sep/2025',
		description:
			'Migrated legacy ASPX system to React + Microfrontends; responsive development with React/TypeScript and Material UI; performance and state optimizations with React Query; adoption of tests, CI/CD, and Expo mobile app.',
		detailedDescription: `Stack: React, TypeScript, Material UI, Microfrontends, React Query, CI/CD.
Led migration of a legacy credit system (ASPX) to React + Microfrontends, reducing maintenance time by 32%.
Built responsive pages with React, TypeScript, and Material UI, improving internal usability score by 20%.
Optimized performance with React Hooks, reducing average loading time by 6%.
Managed state with Context API and React Query, reducing redundant calls by 22%.
Worked on automated tests and CI/CD pipelines, improving release stability.
Regular use of AI tools (Copilot, Cursor, and Claude) to accelerate delivery and improve code quality.`
	},
	{
		name: 'Tracken',
		role: 'Software Engineer II',
		date: 'Aug/2023 - Dec/2023',
		description:
			'Migrated Angular + Ionic apps to React Native; UX/UI improvements; push setup and store publishing; Mercado Livre/Shopee integration; label printing feature implementation.',
		detailedDescription: `Stack: React Native, REST APIs, Push Notifications, Play Store/App Store publishing.
Migrated Angular + Ionic applications to React Native with smoother UX and better responsiveness.
Implemented UX/UI improvements in Tracken Seller and Tracken Operations apps.
Configured Push Notifications and published to Google Play Store and Apple App Store.
Integrated marketplace APIs (Mercado Livre and Shopee).
Developed label printing functionality for logistics workflows.`
	},
	{
		name: 'Uuhuw Software House',
		role: 'Software Engineer',
		date: 'Feb/2022 - Jun/2023',
		description:
			'Responsibilities: development and maintenance of multiple React front-end features. Skills: React, TypeScript, Styled Components, Sass, Axios, SweetAlert2, ReactApexCharts, React GoogleMapsApi, Bootstrap.',
		detailedDescription: `Stack: React, TypeScript, React Native, Redux, Context API, React Query, Axios.
Migrated an international PHP system to React + TypeScript.
Developed mobile version with React Native, focusing on accessibility and usability.
Contributed to technical leadership, best practices, and code optimization.
Refactored with React Hooks (useCallback, useMemo, and memo) for performance gains.
Managed global state with Redux and Context API.
Integrated APIs with Axios and React Query.`
	}
];

export const worklistByLang = {
	pt: portugueseWorklist,
	en: englishWorklist
};

export default portugueseWorklist;
