@echo off

cd %~dp0in

setlocal enableextensions disabledelayedexpansion
set number=100
echo Renaming Images...
for /f "delims=" %%a in ('dir /b *.png') do (
    setlocal enabledelayedexpansion
    for %%b in (!number!) do (
        endlocal
        echo %%~nxa -^> img%%b.png
        ren "%%~fa" img%%b.png
    )
    set /a "number+=1"
)
echo Rendering Video...
..\ffmpeg -framerate 1/5 -start_number 100 -i img%%03d.png -c:v libx264 -r 30 -pix_fmt yuv420p ..\out\video.mp4
echo Done.
pause