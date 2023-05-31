
/* Generated with GenMyModel */

export class Person
{
    // Attributes
	protected _personName: string;	
	protected _photoProfile: string;
	protected _descriptionPerson: string;	
    // Implemented attributes
	
    // Operations
	constructor (
		personName: string,
		photoProfile: string,
		descriptionPerson: string
		) {
		this._personName = personName;
		this._photoProfile = photoProfile;
		this._descriptionPerson = descriptionPerson;
	}
	// Implemented operations

	public get personName(): string {
		return this._personName;
	}

	public get photoProfile (): string {
		return this._photoProfile;
	}

	public get descriptionPerson (): string {
		return this._descriptionPerson;
	}
}

