{ pkgs }: {
  deps = [
    pkgs.python311
    pkgs.python311Packages.django
    pkgs.python311Packages.pillow
    pkgs.python311Packages.whitenoise
  ];
}