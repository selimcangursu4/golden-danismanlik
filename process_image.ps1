Add-Type -AssemblyName System.Drawing
$srcPath = "c:\Users\devse\Desktop\golden-danismanlik\assets\favicon.jpeg"
$destPath = "c:\Users\devse\Desktop\golden-danismanlik\assets\favicon.png"

$bmp = [System.Drawing.Bitmap]::FromFile($srcPath)
$width = $bmp.Width
$height = $bmp.Height

$target = New-Object System.Drawing.Bitmap($width, $height)
$g = [System.Drawing.Graphics]::FromImage($target)
$g.Clear([System.Drawing.Color]::Transparent)
$g.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::AntiAlias

$path = New-Object System.Drawing.Drawing2D.GraphicsPath
$path.AddEllipse(0, 0, $width, $height)
$g.SetClip($path)

$g.DrawImage($bmp, 0, 0, $width, $height)

$target.Save($destPath, [System.Drawing.Imaging.ImageFormat]::Png)

$g.Dispose()
$target.Dispose()
$bmp.Dispose()
