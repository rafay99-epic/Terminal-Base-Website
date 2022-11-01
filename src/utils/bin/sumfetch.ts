import config from '../../../config.json';

const sumfetch = async (args: string[]): Promise<string> => {
  return `
                                                  
 _____ _     _     _    _____     ___               sumfetch: summary display
 |  _  | |_ _| |_ _| |  | __  |___|  _|___ _ _     ------------------------------------ 
 |     | . | . | | | |  |    -| .'|  _| .'| | |    |  ABOUT
 |__|__|___|___|___|_|  |__|__|__,|_| |__,|_  |    |  ${config.name}
                                          |___|    | ﰩ ${config.ps1_hostname}
                                                   |  <u><a href="${config.resume_url}" target="_blank">resume</a></u>
                                                   | 爵 <u><a href="${config.repo}" target="_blank">Github repo</a></u>  
                                                   | ------------------------------------
                                                   |  CONTACT
                                                   |  <u><a href="mailto:${config.email}" target="_blank">${config.email}</a></u>    
                                                   |  <u><a href="https://github.com/${config.social.github}" target="_blank">github.com/${config.social.github}</a></u>
                                                   |  <u><a href="https://linkedin.com/in/${config.social.linkedin}" target="_blank">linkedin.com/in/${config.social.linkedin}</a></u>
                                                   ------------------------------------

`;
  
};



export default sumfetch;
