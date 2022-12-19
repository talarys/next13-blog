import { buildLegacyTheme } from 'sanity';

export const GruvboxDarkColors= {
  bg: '#282828',
  fg: '#e9d9b1',
  gray: '#a89984',
  red: '#fb4934',
  green: '#b8bb26',
  blue: '#83a598',
  yellow: '#fabd2f',
  purple: '#d3869b',
};

export const GruvboxDarkTheme = buildLegacyTheme({
  '--black': GruvboxDarkColors.bg,
  '--white': GruvboxDarkColors.fg,

  '--gray': GruvboxDarkColors.gray,
  '--gray-base': GruvboxDarkColors.gray,

  '--component-bg': GruvboxDarkColors.bg,
  '--component-text-color': GruvboxDarkColors.fg,

  '--brand-primary': GruvboxDarkColors.blue,

  '--default-button-color': GruvboxDarkColors.fg,
  '--default-button-primary-color': GruvboxDarkColors.blue,
  '--default-button-success-color': GruvboxDarkColors.green,
  '--default-button-warning-color': GruvboxDarkColors.yellow,
  '--default-button-danger-color': GruvboxDarkColors.red,

  '--state-info-color': GruvboxDarkColors.blue,
  '--state-success-color': GruvboxDarkColors.green,
  '--state-warning-color': GruvboxDarkColors.yellow,
  '--state-danger-color': GruvboxDarkColors.red,

  '--main-navigation-color': GruvboxDarkColors.bg,
  '--main-navigation-color--inverted': GruvboxDarkColors.fg,

  '--focus-color': GruvboxDarkColors.purple,
});
