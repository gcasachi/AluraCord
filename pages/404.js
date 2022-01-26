import {useRouter} from 'next/router';
import { Box, Button, Text, TextField, Image } from "@skynexui/components";
import appConfig from '../config.json';

// pages/404.js
export default function Custom404() {
    const roteamento = useRouter();
  return (
    <>
      <Box
          styleSheet={{
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            backgroundColor: appConfig.theme.colors.primary[500],
            backgroundImage: 'url(https://i.pinimg.com/originals/fc/32/10/fc3210978074bedc0274d5289e4f5421.gif)',
            backgroundRepeat: 'no-repeat', backgroundSize: '100% 100%'  
          }}
        >

        <Box
              as="form"
              onSubmit={(infosDoEvento) => {
                infosDoEvento.preventDefault();
                roteamento.push('/');
              }}
              styleSheet={{
                display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
                width: { xs: '100%', sm: '50%' }, textAlign: 'center', marginBottom: '32px', 
              }}
            >
              <Text variant="heading2" styleSheet={{ marginBottom: '32px', color: appConfig.theme.colors.neutrals[100] }}>
                Sorry Mate, Page Not Found 404
              </Text>

              <Button
                type='submit'
                label='Voltar'
                fullWidth
                buttonColors={{
                  contrastColor: appConfig.theme.colors.neutrals["000"],
                  mainColor: appConfig.theme.colors.primary[1000],
                  mainColorLight: appConfig.theme.colors.primary[300],
                  mainColorStrong: appConfig.theme.colors.primary[600],
                }}
              />
        </Box>
        </Box>

     

     
    </>
  );
}
