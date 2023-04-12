import fs from 'fs-extra';

import { showGenerate, showCreate, showUpdate, showError, showInfo } from '../../utils/logger.util';
import { checkIfDirExistElseMakeDir, checkExistence, fileAlreadyExist } from '../../utils/checker.util';
import { overwriteFileQuestion } from '../../questions';
import { Answer } from '../../models/choice';

export function defaultTemplate(fileNameWithExt: string, fileContent: string, filePath = '', allowOverwrite = false): Promise<void> {
    showGenerate(fileNameWithExt);
    checkIfDirExistElseMakeDir(filePath);

    const fileExists = checkExistence(`${filePath}/${fileNameWithExt}`)

    if (!fileExists) return createFile(filePath, fileNameWithExt, fileContent);

    if (!allowOverwrite) {
        showInfo(`${fileNameWithExt} skipped as it already exists` );
        return Promise.resolve();
    }

    return overwriteFileOrThrowError(filePath, fileNameWithExt, fileContent);
}

function createFile(filePath: string, fileName: string, fileContent: string, fileAlreadyExists = false): Promise<void> {
    return new Promise((resolve) => {
        const filepath: string = process.cwd() + `${filePath}/${fileName}`;
        fs.writeFile(filepath, fileContent, (error: Error) => {
            if (!error && !fileAlreadyExists) return showCreate(fileName, filePath);
            if (!error && fileAlreadyExists) return showUpdate(fileName, filePath);
            return showError(error);
        });
        setTimeout(() => resolve(), 250);
    })

}

async function overwriteFileOrThrowError(filePath: string, fileNameWithExt: string, fileContent: string): Promise<void> {
    return new Promise(async (resolve) => {
        const overwriteAnswer: Answer = await overwriteFileQuestion();
        if (overwriteAnswer.overwrite === true) return await createFile(filePath, fileNameWithExt, fileContent, true);
        return fileAlreadyExist(fileNameWithExt);
    });
}
