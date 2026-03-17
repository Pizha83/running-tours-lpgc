# Running Tours LPGC — Contexto del Proyecto

## Que es este proyecto

Landing page para **Running Tours LPGC**, un negocio de turismo activo en Las Palmas de Gran Canaria. Ofrece tours guiados corriendo por la ciudad a turistas internacionales.

**Propietario:** Dani Mesa (Nano)
**Telefono/WhatsApp:** +34 671 201 007
**Instagram:** https://www.instagram.com/runningtourslpgc/
**Strava Club:** https://www.strava.com/clubs/2017860
**Repo GitHub:** https://github.com/Pizha83/running-tours-lpgc

## Stack tecnico

- **Next.js 15** (App Router) + TypeScript
- **Tailwind CSS v4**
- **Framer Motion** (animaciones)
- **Lucide React** (iconos)
- **i18n:** 4 idiomas (EN, ES, FR, DE) con rutas `/en`, `/es`, `/fr`, `/de`

## Estructura clave

```
src/
  app/
    [locale]/layout.tsx    — Layout con DictionaryProvider
    [locale]/page.tsx      — Pagina principal (todas las secciones)
  components/              — 12 componentes (Navbar, Hero, TrustBar, Experiences, etc.)
  i18n/
    config.ts              — Locales config
    dictionaries/          — en.ts, es.ts, fr.ts, de.ts
    DictionaryProvider.tsx  — React Context para traducciones
    getDictionary.ts       — Loader de diccionarios
  middleware.ts            — Deteccion automatica de idioma y redirect
  lib/
    animations.ts          — Variantes de Framer Motion
    data.ts                — Reviews (datos estaticos)
public/images/             — Todas las imagenes del proyecto
```

## Estado actual

- Web completamente funcional y buildeada correctamente
- Build pasa sin errores (`npx next build`)
- Todas las traducciones completadas en los 4 idiomas
- Imagenes y logo incluidos en `/public/images/`

---

## DESPLIEGUE EN RASPBERRY PI — INSTRUCCIONES

### Infraestructura disponible en la Raspberry

- **OS:** Raspberry Pi OS
- **Usuario:** Pizha_Pi5
- **IP local:** 192.168.68.107
- **Node.js:** instalado (verificar version con `node -v`, necesita v18+)
- **Caddy:** ya instalado y funcionando (tiene un bot de running configurado)
- **Dominio:** Pendiente crear subdominio en DuckDNS (ej: `runningtourslpgc.duckdns.org`)

### Pasos para desplegar

#### 1. Verificar prerequisitos
```bash
node -v        # Necesita v18+
npm -v
caddy version
which pm2 || sudo npm install -g pm2
```

#### 2. Clonar el repo
```bash
cd ~
git clone https://github.com/Pizha83/running-tours-lpgc.git
cd running-tours-lpgc
```

#### 3. Instalar dependencias y build
```bash
npm install
npx next build
```

Nota: En Raspberry Pi el build puede tardar varios minutos. Es normal.

#### 4. Configurar PM2 para que corra como servicio
```bash
# Arrancar con PM2
pm2 start npm --name "running-tours-lpgc" -- start

# Guardar para que arranque al reiniciar
pm2 save
pm2 startup  # Seguir instrucciones que muestra
```

La app correra en `http://localhost:3000` (o el puerto que Next.js asigne).

#### 5. Configurar DuckDNS

- Ir a https://www.duckdns.org/ y loguearse (con GitHub, Google, etc.)
- Crear subdominio, ej: `runningtourslpgc`
- Apuntar a la IP publica del router (la externa, no la 192.168.x.x)
- Configurar cron para actualizar IP automaticamente:

```bash
mkdir -p ~/duckdns
echo 'echo url="https://www.duckdns.org/update?domains=runningtourslpgc&token=TU_TOKEN&ip=" | curl -k -o ~/duckdns/duck.log -K -' > ~/duckdns/duck.sh
chmod 700 ~/duckdns/duck.sh
# Anadir al crontab:
(crontab -l 2>/dev/null; echo "*/5 * * * * ~/duckdns/duck.sh >/dev/null 2>&1") | crontab -
```

#### 6. Configurar port forwarding en el router

Abrir los puertos en el router apuntando a la Raspberry (192.168.68.107):
- Puerto 80 externo -> 80 en la Raspberry
- Puerto 443 externo -> 443 en la Raspberry

#### 7. Configurar Caddy

Editar el Caddyfile existente (normalmente `/etc/caddy/Caddyfile`) y ANADIR (no reemplazar) el bloque para la web:

```caddyfile
runningtourslpgc.duckdns.org {
    reverse_proxy localhost:3000
}
```

Luego recargar Caddy:
```bash
sudo systemctl reload caddy
```

Caddy gestionara automaticamente el certificado SSL (HTTPS) con Let's Encrypt.

#### 8. Verificar

- Acceder a `https://runningtourslpgc.duckdns.org` desde el navegador
- Probar los 4 idiomas: `/en`, `/es`, `/fr`, `/de`
- Probar en movil

### Comandos utiles post-despliegue

```bash
# Ver logs de la app
pm2 logs running-tours-lpgc

# Reiniciar la app
pm2 restart running-tours-lpgc

# Actualizar codigo (tras git push desde el PC)
cd ~/running-tours-lpgc && git pull && npm run build && pm2 restart running-tours-lpgc

# Ver estado de Caddy
sudo systemctl status caddy
sudo journalctl -u caddy --no-pager -n 50
```

### Notas importantes

- Si la Raspberry tiene Node < 18, actualizar con: `curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash - && sudo apt-get install -y nodejs`
- El build de Next.js en Raspberry Pi 5 tarda ~2-5 minutos, es normal
- Si PM2 no esta instalado: `sudo npm install -g pm2`
- El subdominio DuckDNS y token son datos que el usuario (Dani/Nano) debe crear en duckdns.org
- No borrar ni modificar la config de Caddy existente (tiene un bot de running), solo ANADIR el nuevo bloque
