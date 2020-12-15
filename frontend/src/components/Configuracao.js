import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Container from '@material-ui/core/Container';
import '../css/Configuracao.css';
import api from '../services/api.js';
import * as Constante from '../Constantes.js';



export default function Configuracao({aoEnviarSugestao, aoEnviarPersonalizado}) {


  const [especialidade, setEspecialidade] = useState({
    geral: false,
    ginecologia: false,
    urologia: false,
    proctologia: false,
    ortopedia: false,
    otorrinolaringologia: false,
    oncologia: false,
  });

  const handleEspecialidade = (event) => {
    setEspecialidade({ ...especialidade, [event.target.name]: event.target.checked });
  };

  const [procedimento, setProcedimento] = useState({
    diagnostica: false,
    apendicectomia: false,
    colecistectomia: false,
    herniaUmbilical: false,
    herniaHiato: false,
    gastroplastia: false,
    pancreatectomia: false,
    hepatectomia: false,
    histeroscopiaDiag: false,
    histeroscopiaCiru: false,
    miomaUterino: false,
    endometriose: false,
    rtu: false,
    pieloplastia: false,
    nefrectomia: false,
    adrenalectomia : false,
    prostatectomia : false,
    retossigmoidoscopia : false,
    colectomia : false,
    artroscopia : false,
    otorrinoDiagnostica : false,
    adenoidectomia : false,
    septoplastia : false,
    hipofise : false,
    oncologiaTodas : false,
  });

  const handleProcedimento = (event) => {
    setProcedimento({ ...procedimento, [event.target.name]: event.target.checked });
  };


  function sistema() {

    let sistema = 4;

    // Ginecologia
    // Sistema 1
    if(procedimento.histeroscopiaDiag == true ) {

      sistema = 1;

    }

    // Urologia
    // Sistema 1
    if(procedimento.rtu == true ) {

      sistema = 1;

    }

    // Proctologia
    // Sistema 1
    if(procedimento.retossigmoidoscopia == true ) {

      sistema = 1;

    }

    // Ortopedia
    // Sistema 1
    if(procedimento.artroscopia == true ) {

      sistema = 1;

    }

    // Ortorrinolaringologia
    // Sistema 1
    if(procedimento.otorrinoDiagnostica == true ) {

      sistema = 1;

    }

    // Ginecologia
    // Sistema 2
    if(procedimento.histeroscopiaCiru == true ) {

      sistema = 2;

    }

    // Cirugia Geral
    // Sistema 2
    if(procedimento.diagnostica == true || 
       procedimento.apendicectomia == true || 
       procedimento.colecistectomia == true ) {

       sistema = 2;

    }

    // Cirugia Geral
    // Sistema 3 
    if(procedimento.herniaUmbilical == true || 
       procedimento.herniaHiato == true || 
       procedimento.gastroplastia == true || 
       procedimento.pancreatectomia == true) {
      
        sistema = 3;

    }


    // Ginecologia
    // Sistema 3
    if(procedimento.miomaUterino == true ) {

      sistema = 3;

    }

    // Urologia
    // Sistema 3
    if(procedimento.pieloplastia == true || 
       procedimento.nefrectomia == true ) {

       sistema = 3;


    }


    // Ortorrinolaringologia
    // Sistema 3
    if(procedimento.adenoidectomia == true ) {

      sistema = 3;

    }

    // Ortorrinolaringologia
    // Sistema 3
    if(procedimento.septoplastia == true ) {

      sistema = 3;

    }

    // Cirugia Geral
    // Sistema 4
    if(procedimento.hepatectomia == true) {
 
      sistema = 4;

    }


     // Ginecologia
    // Sistema 4
    if(procedimento.endometriose == true ) {

      sistema = 4;

    }

    // Urologia
    // Sistema 4
    if(procedimento.prostatectomia == true ) {

      sistema = 4;

    }

    // Proctologia
    // Sistema 4
    if(procedimento.colectomia == true ) {

      sistema = 4;

    }

    // Ortorrinolaringologia
    // Sistema 4
    if(procedimento.hipofise == true ) {

      sistema = 4;

    }

    // Oncologia
    // Sistema 4
    if(procedimento.oncologiaTodas == true ) {

      sistema = 4;

    }

     return sistema;

  }

  const estiloSecao = {
    backgroundImage: 'url(' + Constante.BASE_URL_CONF_REACT + '/wp-content/plugins/confiance-medical-monte-o-seu/public/images/fundo_pre_configuracao_v3.png)',
  };

  return (
    <section id="pre-configuracao" style={estiloSecao} >

      <form onSubmit={(event) => {
        event.preventDefault();

        api.get('',{params:{action:"listar_sistemas"}})
           .then((response) => { 
              let num = sistema();
              aoEnviarSugestao(response.data[num]);
              console.log(response.data[num]);
           });

      }} className="configuracao">

        <Container maxWidth="lg">

          <Grid container spacing={0}>

            <Grid item xs={12}>
              <Typography variant="h3" component="h3" className="titulo">PRÉ-CONFIGURAÇÃO</Typography>
              <Typography variant="body1" gutterBottom className="subtexto">Preencha abaixo para receber uma sugestão personalizada.</Typography>
            </Grid>

            <Grid item xs={6} md={3}>
              <Typography variant="h5" component="h5" className="subtitulo">ESPECIALIDADES</Typography>
              <Typography variant="body1" gutterBottom className="subtexto">que utilizarão o equipamento</Typography>

              <div className="form-group">
                    <div className="form-check">
                        <input className="form-check-input compra" 
                                type="checkbox" 
                                id="geral" 
                                name="geral" 
                                value="geral" 
                                onChange={handleEspecialidade}
                                checked={especialidade.geral} />
                        <label className="form-check-label item-especialidade" htmlFor="geral"> Cirurgia Geral </label>
                    </div>
              </div>


              <div className="form-group">
                    <div className="form-check">
                        <input className="form-check-input ginecologia" 
                                type="checkbox" 
                                id="ginecologia" 
                                name="ginecologia" 
                                value="ginecologia" 
                                onChange={handleEspecialidade}
                                checked={especialidade.ginecologia} />
                        <label className="form-check-label item-especialidade" htmlFor="ginecologia"> Ginecologia </label>
                    </div>
              </div>


              <div className="form-group">
                    <div className="form-check">
                        <input className="form-check-input urologia" 
                                type="checkbox" 
                                id="urologia" 
                                name="urologia" 
                                value="urologia" 
                                onChange={handleEspecialidade}
                                checked={especialidade.urologia} />
                        <label className="form-check-label item-especialidade" htmlFor="urologia"> Urologia </label>
                    </div>
              </div>

              <div className="form-group">
                    <div className="form-check">
                        <input className="form-check-input proctologia" 
                                type="checkbox" 
                                id="proctologia" 
                                name="proctologia" 
                                value="proctologia" 
                                onChange={handleEspecialidade}
                                checked={especialidade.proctologia} />
                        <label className="form-check-label item-especialidade" htmlFor="proctologia"> Proctologia </label>
                    </div>
              </div>

              <div className="form-group">
                    <div className="form-check">
                        <input className="form-check-input ortopedia" 
                                type="checkbox" 
                                id="ortopedia" 
                                name="ortopedia" 
                                value="ortopedia" 
                                onChange={handleEspecialidade}
                                checked={especialidade.ortopedia} />
                        <label className="form-check-label item-especialidade" htmlFor="ortopedia"> Ortopedia </label>
                    </div>
              </div>


              <div className="form-group">
                    <div className="form-check">
                        <input className="form-check-input otorrinolaringologia" 
                                type="checkbox" 
                                id="otorrinolaringologia" 
                                name="otorrinolaringologia" 
                                value="otorrinolaringologia" 
                                onChange={handleEspecialidade}
                                checked={especialidade.otorrinolaringologia} />
                        <label className="form-check-label item-especialidade" htmlFor="otorrinolaringologia"> Otorrinolaringologia </label>
                    </div>
              </div>

              <div className="form-group">
                    <div className="form-check">
                        <input className="form-check-input oncologia" 
                                type="checkbox" 
                                id="oncologia" 
                                name="oncologia" 
                                value="oncologia" 
                                onChange={handleEspecialidade}
                                checked={especialidade.oncologia} />
                        <label className="form-check-label item-especialidade" htmlFor="oncologia"> Oncologia </label>
                    </div>
              </div>

            </Grid>

            <Grid item xs={6} md={3}>
              <Typography variant="h5" component="h5" className="subtitulo">PROCEDIMENTOS</Typography>
              <Typography variant="body1" gutterBottom className="subtexto">que serão realizados</Typography>


           { especialidade.geral &&
            <>

                 <div className="form-group">
                    <div className="form-check">
                        <input className="form-check-input diagnostica" 
                                type="checkbox" 
                                id="diagnostica" 
                                name="diagnostica" 
                                value="diagnostica" 
                                onChange={handleProcedimento}
                                checked={procedimento.diagnostica} />
                        <label className="form-check-label item-procedimento" htmlFor="diagnostica"> Diagnóstica </label>
                    </div>
                  </div>

                  <div className="form-group">
                    <div className="form-check">
                        <input className="form-check-input apendicectomia" 
                                type="checkbox" 
                                id="apendicectomia" 
                                name="apendicectomia" 
                                value="apendicectomia" 
                                onChange={handleProcedimento}
                                checked={procedimento.apendicectomia} />
                        <label className="form-check-label item-procedimento" htmlFor="apendicectomia"> Apendicectomia </label>
                    </div>
                  </div>

                  <div className="form-group">
                    <div className="form-check">
                        <input className="form-check-input colecistectomia" 
                                type="checkbox" 
                                id="colecistectomia" 
                                name="colecistectomia" 
                                value="colecistectomia" 
                                onChange={handleProcedimento}
                                checked={procedimento.colecistectomia} />
                        <label className="form-check-label item-procedimento" htmlFor="colecistectomia"> Colecistectomia </label>
                    </div>
                  </div>

                  <div className="form-group">
                    <div className="form-check">
                        <input className="form-check-input herniaUmbilical" 
                                type="checkbox" 
                                id="herniaUmbilical" 
                                name="herniaUmbilical" 
                                value="herniaUmbilical" 
                                onChange={handleProcedimento}
                                checked={procedimento.herniaUmbilical} />
                        <label className="form-check-label item-procedimento" htmlFor="herniaUmbilical"> Hérnia Umbilical/Inguinal </label>
                    </div>
                  </div>

                  <div className="form-group">
                    <div className="form-check">
                        <input className="form-check-input herniaHiato" 
                                type="checkbox" 
                                id="herniaHiato" 
                                name="herniaHiato" 
                                value="herniaHiato" 
                                onChange={handleProcedimento}
                                checked={procedimento.herniaHiato} />
                        <label className="form-check-label item-procedimento" htmlFor="herniaHiato"> Hérnia Hiato </label>
                    </div>
                  </div>

                  <div className="form-group">
                    <div className="form-check">
                        <input className="form-check-input gastroplastia" 
                                type="checkbox" 
                                id="gastroplastia" 
                                name="gastroplastia" 
                                value="gastroplastia" 
                                onChange={handleProcedimento}
                                checked={procedimento.gastroplastia} />
                        <label className="form-check-label item-procedimento" htmlFor="gastroplastia"> Gastroplastia </label>
                    </div>
                  </div>

                  <div className="form-group">
                    <div className="form-check">
                        <input className="form-check-input pancreatectomia" 
                                type="checkbox" 
                                id="pancreatectomia" 
                                name="pancreatectomia" 
                                value="pancreatectomia" 
                                onChange={handleProcedimento}
                                checked={procedimento.pancreatectomia} />
                        <label className="form-check-label item-procedimento" htmlFor="pancreatectomia"> Pancreatectomia </label>
                    </div>
                  </div>

                  <div className="form-group">
                    <div className="form-check">
                        <input className="form-check-input hepatectomia" 
                                type="checkbox" 
                                id="hepatectomia" 
                                name="hepatectomia" 
                                value="hepatectomia" 
                                onChange={handleProcedimento}
                                checked={procedimento.hepatectomia} />
                        <label className="form-check-label item-procedimento" htmlFor="hepatectomia"> Hepatectomia </label>
                    </div>
                  </div>
             
              </>
             /* especialidade.geral */  }

            { especialidade.ginecologia &&
            <>

                <div className="form-group">
                    <div className="form-check">
                        <input className="form-check-input histeroscopiaDiag" 
                                type="checkbox" 
                                id="histeroscopiaDiag" 
                                name="histeroscopiaDiag" 
                                value="histeroscopiaDiag" 
                                onChange={handleProcedimento}
                                checked={procedimento.histeroscopiaDiag} />
                        <label className="form-check-label item-procedimento" htmlFor="histeroscopiaDiag"> Histeroscopia Diagnóstica </label>
                    </div>
                  </div>

                  <div className="form-group">
                    <div className="form-check">
                        <input className="form-check-input histeroscopiaCiru" 
                                type="checkbox" 
                                id="histeroscopiaCiru" 
                                name="histeroscopiaCiru" 
                                value="histeroscopiaCiru" 
                                onChange={handleProcedimento}
                                checked={procedimento.histeroscopiaCiru} />
                        <label className="form-check-label item-procedimento" htmlFor="histeroscopiaCiru"> Histeroscopia Cirúrgica </label>
                    </div>
                  </div>

                  <div className="form-group">
                    <div className="form-check">
                        <input className="form-check-input miomaUterino" 
                                type="checkbox" 
                                id="miomaUterino" 
                                name="miomaUterino" 
                                value="miomaUterino" 
                                onChange={handleProcedimento}
                                checked={procedimento.miomaUterino} />
                        <label className="form-check-label item-procedimento" htmlFor="miomaUterino"> Mioma Uterino </label>
                    </div>
                  </div>

                  <div className="form-group">
                    <div className="form-check">
                        <input className="form-check-input endometriose" 
                                type="checkbox" 
                                id="endometriose" 
                                name="endometriose" 
                                value="endometriose" 
                                onChange={handleProcedimento}
                                checked={procedimento.endometriose} />
                        <label className="form-check-label item-procedimento" htmlFor="endometriose"> Endometriose </label>
                    </div>
                  </div>

              </>
             /* especialidade.ginecologia */  }

             { especialidade.urologia &&
              <>

                  <div className="form-group">
                    <div className="form-check">
                        <input className="form-check-input rtu" 
                                type="checkbox" 
                                id="rtu" 
                                name="rtu" 
                                value="rtu" 
                                onChange={handleProcedimento}
                                checked={procedimento.rtu} />
                        <label className="form-check-label item-procedimento" htmlFor="rtu"> RTU </label>
                    </div>
                  </div>


                  <div className="form-group">
                    <div className="form-check">
                        <input className="form-check-input pieloplastia" 
                                type="checkbox" 
                                id="pieloplastia" 
                                name="pieloplastia" 
                                value="pieloplastia" 
                                onChange={handleProcedimento}
                                checked={procedimento.pieloplastia} />
                        <label className="form-check-label item-procedimento" htmlFor="pieloplastia"> Pieloplastia </label>
                    </div>
                  </div>

                  <div className="form-group">
                    <div className="form-check">
                        <input className="form-check-input nefrectomia" 
                                type="checkbox" 
                                id="nefrectomia" 
                                name="nefrectomia" 
                                value="nefrectomia" 
                                onChange={handleProcedimento}
                                checked={procedimento.nefrectomia} />
                        <label className="form-check-label item-procedimento" htmlFor="nefrectomia"> Nefrectomia </label>
                    </div>
                  </div>

                  <div className="form-group">
                    <div className="form-check">
                        <input className="form-check-input adrenalectomia" 
                                type="checkbox" 
                                id="adrenalectomia" 
                                name="adrenalectomia" 
                                value="adrenalectomia" 
                                onChange={handleProcedimento}
                                checked={procedimento.adrenalectomia} />
                        <label className="form-check-label item-procedimento" htmlFor="adrenalectomia"> Adrenalectomia </label>
                    </div>
                  </div>

                  <div className="form-group">
                    <div className="form-check">
                        <input className="form-check-input prostatectomia" 
                                type="checkbox" 
                                id="prostatectomia" 
                                name="prostatectomia" 
                                value="prostatectomia" 
                                onChange={handleProcedimento}
                                checked={procedimento.prostatectomia} />
                        <label className="form-check-label item-procedimento" htmlFor="prostatectomia"> Prostatectomia </label>
                    </div>
                  </div>

              </>
             /* especialidade.urologia */  }


             { especialidade.proctologia &&
              <>

                 <div className="form-group">
                    <div className="form-check">
                        <input className="form-check-input retossigmoidoscopia" 
                                type="checkbox" 
                                id="retossigmoidoscopia" 
                                name="retossigmoidoscopia" 
                                value="retossigmoidoscopia" 
                                onChange={handleProcedimento}
                                checked={procedimento.retossigmoidoscopia} />
                        <label className="form-check-label item-procedimento" htmlFor="retossigmoidoscopia"> Retossigmoidoscopia </label>
                    </div>
                  </div>


                  <div className="form-group">
                    <div className="form-check">
                        <input className="form-check-input colectomia" 
                                type="checkbox" 
                                id="colectomia" 
                                name="colectomia" 
                                value="colectomia" 
                                onChange={handleProcedimento}
                                checked={procedimento.colectomia} />
                        <label className="form-check-label item-procedimento" htmlFor="colectomia"> Colectomia </label>
                    </div>
                  </div>

              </>
              /* especialidade.proctologia */  }


              { especialidade.ortopedia && 
                <>

                 <div className="form-group">
                    <div className="form-check">
                        <input className="form-check-input artroscopia" 
                                type="checkbox" 
                                id="artroscopia" 
                                name="artroscopia" 
                                value="artroscopia" 
                                onChange={handleProcedimento}
                                checked={procedimento.artroscopia} />
                        <label className="form-check-label item-procedimento" htmlFor="urologia"> Artroscopia </label>
                    </div>
                  </div>

                </>
              /* especialidade.ortopedia */ }

             { especialidade.otorrinolaringologia && 
                <>

                 <div className="form-group">
                    <div className="form-check">
                        <input className="form-check-input otorrinoDiagnostica" 
                                type="checkbox" 
                                id="otorrinoDiagnostica" 
                                name="otorrinoDiagnostica" 
                                value="otorrinoDiagnostica" 
                                onChange={handleProcedimento}
                                checked={procedimento.otorrinoDiagnostica} />
                        <label className="form-check-label item-procedimento" htmlFor="otorrinoDiagnostica"> Otorrino. Diagnóstica </label>
                    </div>
                  </div>

                  <div className="form-group">
                    <div className="form-check">
                        <input className="form-check-input adenoidectomia" 
                                type="checkbox" 
                                id="adenoidectomia" 
                                name="adenoidectomia" 
                                value="adenoidectomia" 
                                onChange={handleProcedimento}
                                checked={procedimento.adenoidectomia} />
                        <label className="form-check-label item-procedimento" htmlFor="adenoidectomia"> Adenoidectomia </label>
                    </div>
                  </div>

                  <div className="form-group">
                    <div className="form-check">
                        <input className="form-check-input septoplastia" 
                                type="checkbox" 
                                id="septoplastia" 
                                name="septoplastia" 
                                value="septoplastia" 
                                onChange={handleProcedimento}
                                checked={procedimento.septoplastia} />
                        <label className="form-check-label item-procedimento" htmlFor="septoplastia"> Septoplastia </label>
                    </div>
                  </div>


                  <div className="form-group">
                    <div className="form-check">
                        <input className="form-check-input hipofise" 
                                type="checkbox" 
                                id="hipofise" 
                                name="hipofise" 
                                value="hipofise" 
                                onChange={handleProcedimento}
                                checked={procedimento.hipofise} />
                        <label className="form-check-label item-procedimento" htmlFor="hipofise"> Hipófise </label>
                    </div>
                  </div>

              </>
              /* especialidade.otorrinolaringologia */ }

             { especialidade.oncologia && 
               <>

                 <div className="form-group">
                    <div className="form-check">
                        <input className="form-check-input oncologiaTodas" 
                                type="checkbox" 
                                id="oncologiaTodas" 
                                name="oncologiaTodas" 
                                value="oncologiaTodas" 
                                onChange={handleProcedimento}
                                checked={procedimento.oncologiaTodas } />
                        <label className="form-check-label item-procedimento" htmlFor="oncologiaTodas"> Todas </label>
                    </div>
                  </div>

               </>
               /* especialidade.oncologia */ }

            </Grid>

          </Grid>

          <Grid container spacing={0}>
             <Grid item xs={12} md={5}>
              <Button type="submit" variant="contained" color="primary" className="botao">
                APLICAR CONFIGURAÇÕES
              </Button>
            </Grid>
          </Grid>

        </Container>

      </form>
    </section>
  );
}