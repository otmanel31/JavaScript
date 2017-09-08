import { Tag } from "./tag";

export class ImageFile {
    constructor(public id: number, public name: string, public filename: string, 
        public contentType: string, public filesize: number, public hashMd5?: string,
        public tags?: Tag[]) {}
}