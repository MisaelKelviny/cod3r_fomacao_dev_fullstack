export default class Cpf {
  static formatCpf(cpf: string): string {
    if (!cpf && cpf.length > 14) return cpf.substring(0, 14);
    return cpf
      .replace(/\D/g, "")
      .replace(/(\d{3})(\d)/, "$1.$2")
      .replace(/(\d{3})(\d)/, "$1.$2")
      .replace(/(\d{3})(\d{1,2})$/, "$1-$2");
  }

  static desformatCpf(cpf: string): string {
    return cpf.replace(/\D/g, "");
  }
}
