export const STR_CLI_WELCOME = () => `

`;

export const STR_CLI_HELP = () => `
MWAT - Micro Workflow Automation Tool

USAGE:
  mwat [SUBCOMMAND] [OPTIONS]

SUBCOMMANDS:
1) run {path_to_workflow.ts}
2) help
3) version
4) upgrade
`;

export const STR_CLI_NEW_VESRSIN = (
  currentVersion: string,
  newVersion: string,
) => `
It is possible to upgrade version ${currentVersion} to ${newVersion}
`;

export const STR_CLI_ERROR = () => `

`;
