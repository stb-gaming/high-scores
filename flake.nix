{
  description = "A very basic flake";

  inputs = {
    nixpkgs.url = "github:nixos/nixpkgs?ref=0343e3415784b2cd9c68924294794f7dbee12ab3";
  };

  outputs = { self, nixpkgs }: 
  let 
  system = "x86_64-linux";
  pkgs = import nixpkgs { inherit system; };
  ruby = pkgs.ruby_2_7;
  bundlerEnv = pkgs.bundlerEnv;
  jekyll_env = bundlerEnv rec {
    name = "stb";
    inherit ruby;
    gemfile = ./Gemfile;
    lockfile = ./Gemfile.lock;
    gemset = ./gemset.nix;
  };
  in 
  {
    devShell.${system} = pkgs.mkShell {
      shellHook = ''
      ${jekyll_env}/bin/jekyll serve -w
      '';
    };
  };
}
