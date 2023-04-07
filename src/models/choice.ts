export interface Answer {
    files: Object;
    goldenPath: GoldenPathValue;
    projectName: string;
    environmentSelection: string[];
    versionSelection: string;
    support: string;
    reason: string;
    serviceOffering: string;
    supportContact: string;
    accountNameQualified: string;
    accountNameShort: string;
    accountId: string;
    costCenter: string;
    licenses?: LicenseValue;
    overwrite?: boolean;
}

export interface Choice {
    name: string;
    value: LicenseValue |
           GoldenPathValue;
}


export enum LicenseValue {
    MIT = 'MIT',
    APACHE = 'APACHE',
    ISC = 'ISC',
    BSD2 = 'BSD2',
    GPL3 = 'GPL3',
    CCO1 = 'CCO1',
}

export enum GoldenPathValue {
    AWS_CDK = 'AWS-CDK',
    ANGULAR = 'Angular App'
}
