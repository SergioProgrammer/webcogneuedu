export const siteMeta = {
	title: "CogNeuroEdu | Investigación en neuroeducación y lenguaje",
	description:
		"Grupo de investigación de la UNED centrado en neuroeducación, lenguaje, cognición y transferencia científica con impacto académico y social.",
};

export const metrics = [
	{ value: "525", label: "Referencia oficial del grupo competitivo y consolidado" },
	{ value: "12+", label: "Investigadoras e investigadores vinculados a proyectos activos" },
	{ value: "3", label: "Redes estratégicas de transferencia y colaboración internacional" },
];

export const researchLines = [
	{
		id: "linea-neuroeducacion",
		title: "Neuroeducación, lenguaje y desarrollo temprano",
		description:
			"Estudiamos cómo la cognición, el lenguaje y la creatividad interactúan en etapas clave del aprendizaje para diseñar intervenciones tempranas con base científica.",
		points: ["Diseño universal para el aprendizaje", "Trastornos del habla y la comunicación", "Evaluación de impacto en contextos reales"],
	},
	{
		id: "linea-transferencia",
		title: "Transferencia clínica y educativa",
		description:
			"Convertimos evidencia científica en herramientas, protocolos y materiales aplicables por docentes, logopedas, familias y centros sociosanitarios.",
		points: ["Prototipos y recursos de intervención", "Trabajo interdisciplinar con instituciones", "Validación aplicada y mejora continua"],
	},
	{
		id: "linea-datos",
		title: "Datos, envejecimiento y salud cognitiva",
		description:
			"Participamos en redes que generan datos normativos y conocimiento longitudinal para comprender perfiles cognitivos y apoyar decisiones basadas en evidencia.",
		points: ["Consorcios de datos abiertos", "Salud cognitiva y envejecimiento", "Metodologías reproducibles y comparables"],
	},
];

export const featuredProjects = [
	{
		title: "Cátedra Internacional en Salud Cognitiva",
		tag: "Red científica",
		description:
			"CogNeuroEdu participa en una red internacional orientada a crear, gestionar y transferir conocimiento científico para promover perfiles cognitivos saludables.",
		image: "/CATEDRA-CONJUNTO.png",
		alt: "Logotipo de la Cátedra Internacional en Salud Cognitiva",
		link: "/proyectos",
	},
	{
		title: "IMIENS",
		tag: "Institución colaboradora",
		description:
			"Colaboración con el Instituto Mixto de Investigación para impulsar formación, investigación y cooperación entre grupos vinculados a salud y educación.",
		image: "/IMIENS-OK.png",
		alt: "Logotipo del IMIENS",
		link: "/proyectos",
	},
	{
		title: "SCAND Cognition",
		tag: "Consorcio de datos",
		description:
			"Participación en la generación de datos normativos sobre envejecimiento y rendimiento cognitivo para investigación longitudinal y práctica clínica.",
		image: "/SCAND.png",
		alt: "Logotipo de SCAND Cognition",
		link: "/proyectos",
	},
];

export const publications = [
	{
		year: "2025",
		type: "Artículo",
		title: "Diseño de intervenciones tempranas en lenguaje con enfoque de neuroeducación aplicada",
		summary:
			"Síntesis de evidencia y recomendaciones metodológicas para entornos escolares y clínicos con atención a accesibilidad, evaluación y transferencia.",
		link: "/publicaciones",
	},
	{
		year: "2024",
		type: "Informe",
		title: "Cognición, creatividad y contextos inclusivos de aprendizaje",
		summary:
			"Documento de trabajo sobre creatividad, aprendizaje multimodal y estrategias de implementación en comunidades educativas diversas.",
		link: "/publicaciones",
	},
	{
		year: "2024",
		type: "Capítulo",
		title: "Evidencia, diseño visual y comunicación científica en materiales de intervención",
		summary:
			"Propuesta para traducir investigación académica a recursos claros, consistentes y utilizables por profesorado, familias y profesionales sanitarios.",
		link: "/publicaciones",
	},
];

export const collaborators = [
	{ name: "UNED · Facultad de Educación" },
	{ name: "Cátedra Internacional en Salud Cognitiva" },
	{ name: "IMIENS" },
	{ name: "SCAND Cognition" },
];

export const contactChannels = [
	{ label: "Correo principal", value: "cogneuroedu@edu.uned.es", href: "mailto:cogneuroedu@edu.uned.es" },
	{ label: "Dirección académica", value: "mt.m.aragoneses@edu.uned.es", href: "mailto:mt.m.aragoneses@edu.uned.es" },
	{ label: "Teléfono", value: "+34 91 398 73 84", href: "tel:+34913987384" },
	{ label: "Sede", value: "C/ Juan del Rosal 14, 28040 Madrid, España", href: "https://www.uned.es/" },
];

export const teamMembers = [
	{
		name: "María Teresa Martín-Aragoneses",
		role: "Profesora Titular e Investigadora",
		highlight: "Investigadora Principal",
		image: { src: "/Maria.webp", placeholder: "M", alt: "Retrato de María Teresa Martín-Aragoneses" },
	},
	{
		name: "Irene Cadime",
		role: "Profesora Adjunta e Investigadora",
		image: { src: "/irene.webp", placeholder: "I", alt: "Retrato de Irene Cadime" },
	},
	{
		name: "Barbara Conboy",
		role: "Profesora Titular e Investigadora",
		image: { src: "/barbara.webp", placeholder: "B", alt: "Retrato de Barbara Conboy" },
	},
	{
		name: "David del Río Grande",
		role: "Profesor Titular e Investigador",
		image: { src: "/david.webp", placeholder: "D", alt: "Retrato de David del Río Grande" },
	},
	{
		name: "Miguel Ángel Fernández-Blázquez",
		role: "Profesor Titular e Investigador",
		image: { src: "/miguel.webp", placeholder: "M", alt: "Retrato de Miguel Ángel Fernández-Blázquez" },
	},
	{
		name: "Carlos Gallego López",
		role: "Profesor Titular e Investigador",
		image: { src: "/carlos.webp", placeholder: "C", alt: "Retrato de Carlos Gallego López" },
	},
	{
		name: "Encarnación Hernández Pérez",
		role: "Profesora Titular e Investigadora",
		image: { src: "/encarnacion.webp", placeholder: "E", alt: "Retrato de Encarnación Hernández Pérez" },
	},
	{
		name: "Irene Puerta-Araña",
		role: "Investigadora Predoctoral",
		image: { src: "/irenep.jpg", placeholder: "I", alt: "Retrato de Irene Puerta-Araña" },
	},
	{
		name: "Raquel Rodríguez Fernández",
		role: "Profesora Titular e Investigadora",
		image: { src: "/raquel.webp", placeholder: "R", alt: "Retrato de Raquel Rodríguez Fernández" },
	},
	{
		name: "Celia Teira-Serrano",
		role: "Profesora Titular e Investigadora",
		image: { src: "/celia.webp", placeholder: "C", alt: "Retrato de Celia Teira-Serrano" },
	},
	{
		name: "Carolina Villahoz Torio",
		role: "Técnica de apoyo a la investigación",
		image: { src: "/carolina.jpg", placeholder: "C", alt: "Retrato de Carolina Villahoz Torio" },
	},
	{
		name: "Ángela Zamora Menéndez",
		role: "Profesora Titular e Investigadora",
		image: { src: "/angela.jpg", placeholder: "A", alt: "Retrato de Ángela Zamora Menéndez" },
	},
	{
		name: "Carolina Alcover",
		role: "Profesora Titular e Investigadora",
		image: { src: "/carolina.webp", placeholder: "C", alt: "Retrato de Carolina Alcover" },
	},
	{
		name: "Vicenç Torrens García",
		role: "Profesor Titular e Investigador",
		image: { src: "/vicenc.webp", placeholder: "V", alt: "Retrato de Vicenç Torrens García" },
	},
];

export const defaultLinks = {
	orcid: "#",
	email: "cogneuroedu@edu.uned.es",
	profile: "https://www.uned.es/",
};
