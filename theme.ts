import { buildLegacyTheme } from "sanity";

const gruvboxColors={
    "--bg":"#282828",
    "--fg":"#e9d9b1",
    "--gray":"#a89984",
    "--red":"#fb4934",
    "--green":"#b8bb26",
    "--blue":"#83a598",
    "--yellow":"#fabd2f",
    '--purple':'#d3869b'
}

export const gruvboxTheme=buildLegacyTheme({
    "--black":gruvboxColors['--bg'],
    "--white":gruvboxColors['--fg'],

    "--gray":gruvboxColors['--gray'],
    "--gray-base":gruvboxColors['--gray'],

    "--component-bg":gruvboxColors['--bg'],
    "--component-text-color":gruvboxColors['--fg'],

    "--brand-primary":gruvboxColors['--blue'],

    "--default-button-color":gruvboxColors['--fg'],
    "--default-button-primary-color":gruvboxColors['--blue'],
    "--default-button-success-color":gruvboxColors['--green'],
    "--default-button-warning-color":gruvboxColors['--yellow'],
    "--default-button-danger-color":gruvboxColors['--red'],

    "--state-info-color":gruvboxColors['--blue'],
    "--state-success-color":gruvboxColors['--green'],
    "--state-warning-color":gruvboxColors['--yellow'],
    "--state-danger-color":gruvboxColors['--red'],

    "--main-navigation-color":gruvboxColors['--bg'],
    "--main-navigation-color--inverted":gruvboxColors['--fg'],

    "--focus-color":gruvboxColors['--purple'],
})