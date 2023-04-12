export interface Answer {
    files: Object;
    goldenPath: GoldenPathValue;
    projectName: string;
    environmentSelection: string[];
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

export interface TaggingAnswer {
    costCenter: string;
    support: string;
    supportContact: string;
    reason: string;
    serviceOffering: string;
}
export interface AwsAccountAnswer {
    accountNameQualified: string;
    accountNameShort: string;
    accountId: string;
}
export interface EnvironmentAwsAccountAnswer extends AwsAccountAnswer {
    env: string;
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
