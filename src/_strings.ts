import { BLUE, GREEN, MAGANTA, YELLOW } from "./logger/colors.ts";

export const STR_CLI_WELCOME = () => `

`;

export const STR_CLI_HELP = () => `
${MAGANTA("MWAT - Micro Workflow Automation Tool")}

USAGE:
  ${MAGANTA("mwat")} [${GREEN("SUBCOMMAND")}] [${YELLOW("OPTIONS")}]

SUBCOMMANDS:
1) ${GREEN("run")} {PATH_TO_WORKFLOW}
2) ${GREEN("help")}
3) ${GREEN("version")}
4) ${GREEN("upgrade")}

MORE DOCUMENTATION: ${
  BLUE("https://github.com/SHIBUI-ENGINEERING/MWAT/blob/main/README.md")
}
`;

export const STR_CLI_HELP_RUN = () => `
`;

export const STR_CLI_NEW_VESRSIN = (
  currentVersion: string,
  newVersion: string,
) => `
It is possible to upgrade version ${currentVersion} to ${newVersion}
`;

export const STR_CLI_ERROR = () => `

`;
