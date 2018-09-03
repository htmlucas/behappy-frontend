class	Repository	{
  constructor()	{
    this.key	=	'behappy-user';
  }

  save(json, callback)	{
    let	data = JSON.stringify(json);
    window.localStorage.setItem(this.key, data);
    callback();
  }

  get(success, error) {
    let data = window.localStorage.getItem(this.key);
    let json = JSON.parse(data);
    if (json) {
      success(json);
    } else {
      error();
    }
  }
}
export	default	Repository;