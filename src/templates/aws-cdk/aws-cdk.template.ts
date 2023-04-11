import { execSync } from 'child_process';
import { EnvironmentAwsAccountAnswer, TaggingAnswer } from '../../models/choice';
import { FileName } from '../../models/files';
import { showError, showGenerate, showInfo, showSuccess } from '../../utils/logger.util';
import { defaultTemplate } from '../default/default.template';
import { getAwsCdkBinCdkProjectTs, getAwsCdkConfig, getAwsCdkConfigFactoryTs, getAwsCdkConstantsTs, getAwsCdkEslintConfig, getAwsCdkEslintIgnore, getAwsCdkExampleTest, getAwsCdkGitIgnore, getAwsCdkInfrastructureTs, getAwsCdkJestConfig, getAwsCdkPackageJson, getAwsCdkPipeline, getAwsCdkPrettier, getAwsCdkReadme, getAwsCdkStackTs, getAwsCdkTaggingTs, getAwsCdkTsconfig } from './files';

export async function awsCdkTemplate(
    projectName: string,
    version: string,
    tagging: TaggingAnswer,
    environments: EnvironmentAwsAccountAnswer[]
) {

    try {

        showInfo(`Begging to configure your project`);
        showInfo(`---------------------------------`);

        await defaultTemplate(FileName.PACKAGE_JSON, getAwsCdkPackageJson(projectName, version));

        await defaultTemplate(FileName.README, getAwsCdkReadme(projectName, version));

        await defaultTemplate(FileName.TS_CONFIG, getAwsCdkTsconfig());

        await defaultTemplate(FileName.JEST_CONFIG, getAwsCdkJestConfig());

        await defaultTemplate(FileName.PRETTIERRC, getAwsCdkPrettier());

        await defaultTemplate(FileName.GIT_IGNORE, getAwsCdkGitIgnore());

        await defaultTemplate(FileName.ESLINTRC, getAwsCdkEslintConfig());

        await defaultTemplate(FileName.ESLINT_IGNORE, getAwsCdkEslintIgnore());

        await defaultTemplate(FileName.TEST_DEMO, getAwsCdkExampleTest(), '/test');

        await defaultTemplate(FileName.TAGGING_TS, getAwsCdkTaggingTs(), '/lib');

        await defaultTemplate(FileName.CONSTANTS_TS, getAwsCdkConstantsTs(environments), '/lib');

        await defaultTemplate(FileName.CDK_JSON, getAwsCdkConfig(projectName, version));

        await defaultTemplate(FileName.CONFIG_FACTORY, getAwsCdkConfigFactoryTs(
            environments.find(env => env.env.toLocaleLowerCase() === 'np'),
            environments.find(env => env.env.toLocaleLowerCase() === 'qa'),
            environments.find(env => env.env.toLocaleLowerCase() === 'pd'),
            tagging,
            projectName
        ), '/lib/config');

        await defaultTemplate(FileName.INFRASTRUCTURE, getAwsCdkInfrastructureTs(), '/lib/config');

        await defaultTemplate(`awp-${projectName}-v${version}.ts`, getAwsCdkBinCdkProjectTs(
            environments.find(env => env.env.toLocaleLowerCase() === 'np'),
            environments.find(env => env.env.toLocaleLowerCase() === 'qa'),
            environments.find(env => env.env.toLocaleLowerCase() === 'pd'),
            projectName
        ), '/bin');

        await defaultTemplate(FileName.PIPELINE, getAwsCdkPipeline(projectName), '/.pipeline');

        for (const environment of environments) {
            await defaultTemplate(`${environment.env.toLocaleLowerCase()}-stack.ts`, getAwsCdkStackTs(environment.env), '/lib');
        }

        showInfo('Installing packages');
        execSync('npm i', { stdio: 'inherit' });
    } catch (e) {
        showError(e as Error);
    }


    // execSync('git clone --depth=1 --branch=main https://github.com/nsw-health-pathology/goldpath-aws-cdk-typescript.git temp-golden-path');
    // execSync('sleep 1s');
    // execSync('rm -rf ./temp-golden-path/.git');
    // execSync('sleep 1s');
    // execSync('cp -r ./temp-golden-path/. .');
    // execSync('sleep 1s');
    // execSync('rm -rf ./temp-golden-path');
    // showSuccess('NSWHP DevOps has laid an aws-cdk golden path for you!');
    return;
}
