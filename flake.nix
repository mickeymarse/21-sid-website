# flake.nix

{
  description = "test";

  inputs =
    {
      nixpkgs.url = "github:nixos/nixpkgs/nixos-unstable";
      nodejs_22.url = "github:nixos/nixpkgs/3281bec7174f679eabf584591e75979a258d8c40";
    };

  outputs = { self, nixpkgs, ... }@inputs:
    let
      system = "x86_64-linux";
      pkgs = nixpkgs.legacyPackages.${system};
    in
    {
      devShells.x86_64-linux.default =
        pkgs.mkShell
          {
            nativeBuildInputs = with pkgs; [
              git
              gh
              inputs.nodejs_22.legacyPackages.${system}.nodejs_22
            ];

                GREETING = "\nYou're working on 21 Sid website now. Built with NextJS.\n";

                shellHook = ''
                 echo $GREETING
                '';
          };
    };
}
