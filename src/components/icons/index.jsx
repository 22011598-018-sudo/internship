const base = {
  width: 20,
  height: 20,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.8,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  "aria-hidden": true,
};

export const MailIcon = (p) => (
  <svg {...base} {...p}>
    <rect x="3" y="5" width="18" height="14" rx="3" />
    <path d="m4 7 8 6 8-6" />
  </svg>
);

export const LockIcon = (p) => (
  <svg {...base} {...p}>
    <rect x="4" y="10" width="16" height="10" rx="3" />
    <path d="M8 10V7a4 4 0 0 1 8 0v3" />
  </svg>
);

export const EyeIcon = (p) => (
  <svg {...base} {...p}>
    <path d="M2 12s3.6-7 10-7 10 7 10 7-3.6 7-10 7S2 12 2 12Z" />
    <circle cx="12" cy="12" r="3" />
  </svg>
);

export const EyeOffIcon = (p) => (
  <svg {...base} {...p}>
    <path d="M3 3l18 18" />
    <path d="M10.6 5.1A10 10 0 0 1 12 5c6.4 0 10 7 10 7a17 17 0 0 1-3.2 3.9M6.6 6.6A17 17 0 0 0 2 12s3.6 7 10 7a9.6 9.6 0 0 0 4-.9" />
    <path d="M9.9 9.9a3 3 0 0 0 4.2 4.2" />
  </svg>
);

export const CheckIcon = (p) => (
  <svg {...base} strokeWidth={2.6} {...p}>
    <path d="m5 12.5 4.5 4.5L19 7.5" />
  </svg>
);

export const AlertIcon = (p) => (
  <svg {...base} {...p}>
    <circle cx="12" cy="12" r="9" />
    <path d="M12 7.5v5M12 16v.01" />
  </svg>
);

export const GoogleIcon = (p) => (
  <svg width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" {...p}>
    <path fill="#4285F4" d="M22.5 12.3c0-.8-.1-1.5-.2-2.2H12v4.2h5.9a5 5 0 0 1-2.2 3.3v2.7h3.5c2.1-1.9 3.3-4.7 3.3-8Z" />
    <path fill="#34A853" d="M12 23c3 0 5.500-1 7.300-2.700l-3.500-2.700c-1 .7-2.200 1.100-3.800 1.100-2.900 0-5.400-2-6.300-4.600H2.100v2.800A11 11 0 0 0 12 23Z" />
    <path fill="#FBBC05" d="M5.700 14.100a6.600 6.600 0 0 1 0-4.200V7.100H2.100a11 11 0 0 0 0 9.800l3.600-2.800Z" />
    <path fill="#EA4335" d="M12 5.400c1.600 0 3.100.6 4.200 1.700l3.100-3.100A11 11 0 0 0 2.100 7.100l3.600 2.800C6.600 7.400 9.100 5.400 12 5.400Z" />
  </svg>
);

export const GithubIcon = (p) => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...p}>
    <path d="M12 2a10 10 0 0 0-3.200 19.500c.5.100.7-.2.7-.5v-1.800c-2.800.6-3.400-1.200-3.400-1.200-.5-1.200-1.100-1.500-1.100-1.500-.9-.6.100-.6.100-.6 1 .1 1.500 1 1.500 1 .9 1.500 2.300 1.100 2.900.8.1-.6.3-1.100.6-1.300-2.200-.3-4.600-1.100-4.600-5 0-1.100.4-2 1-2.700-.1-.3-.4-1.300.1-2.700 0 0 .8-.3 2.700 1a9.300 9.300 0 0 1 5 0c1.900-1.300 2.700-1 2.700-1 .5 1.400.2 2.400.1 2.700.6.7 1 1.600 1 2.700 0 3.900-2.400 4.700-4.600 5 .4.300.7.900.7 1.800V21c0 .3.2.6.7.5A10 10 0 0 0 12 2Z" />
  </svg>
);
