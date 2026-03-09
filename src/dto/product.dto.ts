import {
  IsInt,
  IsString,
  IsNumber,
  IsNotEmpty,
  IsOptional,
  Min,
  Max,
  MinLength,
  MaxLength,
  IsPositive,
  ValidateIf,
} from 'class-validator';
import { Type } from 'class-transformer';

export class ProductGetDto {
  @IsInt({ message: 'id должен быть целым числом' })
  @IsPositive({ message: 'id должен быть положительным числом' })
  @Type(() => Number)
  id!: number;

  @IsString({ message: 'title должен быть строкой' })
  @IsNotEmpty({ message: 'title не может быть пустым' })
  @MinLength(2, { message: 'title должен содержать минимум 2 символа' })
  @MaxLength(100, { message: 'title не может превышать 100 символов' })
  title!: string;

  @IsString({ message: 'description должна быть строкой' })
  @IsNotEmpty({ message: 'description не может быть пустой' })
  @MaxLength(2000, { message: 'description не может превышать 2000 символов' })
  description!: string;

  @IsNumber(
    { maxDecimalPlaces: 2 },
    { message: 'price должен быть числом с максимум 2 знаками после запятой' },
  )
  @IsPositive({ message: 'price должен быть положительным числом' })
  @Min(0.01, { message: 'price не может быть меньше 0.01' })
  @Max(1_000_000, { message: 'price не может превышать 1 000 000' })
  @Type(() => Number)
  price!: number;
}

export class ProductPostDto {
  @IsString({ message: 'title должен быть строкой' })
  @IsNotEmpty({ message: 'title не может быть пустым' })
  @MinLength(2, { message: 'title должен содержать минимум 2 символа' })
  @MaxLength(100, { message: 'title не может превышать 100 символов' })
  title!: string;

  @IsString({ message: 'description должна быть строкой' })
  @IsNotEmpty({ message: 'description не может быть пустой' })
  @MinLength(10, {
    message: 'description должна содержать минимум 10 символов',
  })
  @MaxLength(2000, { message: 'description не может превышать 2000 символов' })
  description!: string;

  @IsNumber(
    { maxDecimalPlaces: 2 },
    { message: 'price должен быть числом с максимум 2 знаками после запятой' },
  )
  @IsPositive({ message: 'price должен быть положительным числом' })
  @Min(0.01, { message: 'price не может быть меньше 0.01' })
  @Max(1_000_000, { message: 'price не может превышать 1 000 000' })
  @Type(() => Number)
  price!: number;
}

export class ProductPatchDto {
  @IsOptional()
  @IsString({ message: 'title должен быть строкой' })
  @IsNotEmpty({ message: 'title не может быть пустой строкой' })
  @MinLength(2, { message: 'title должен содержать минимум 2 символа' })
  @MaxLength(100, { message: 'title не может превышать 100 символов' })
  title?: string;

  @IsOptional()
  @IsString({ message: 'description должна быть строкой' })
  @IsNotEmpty({ message: 'description не может быть пустой строкой' })
  @MinLength(10, {
    message: 'description должна содержать минимум 10 символов',
  })
  @MaxLength(2000, { message: 'description не может превышать 2000 символов' })
  description?: string;

  @IsOptional()
  @IsNumber(
    { maxDecimalPlaces: 2 },
    { message: 'price должен быть числом с максимум 2 знаками после запятой' },
  )
  @IsPositive({ message: 'price должен быть положительным числом' })
  @Min(0.01, { message: 'price не может быть меньше 0.01' })
  @Max(1_000_000, { message: 'price не может превышать 1 000 000' })
  @Type(() => Number)
  price?: number;

  @ValidateIf((o) => !o.title && !o.description && o.price === undefined)
  @IsNotEmpty({
    message: 'Необходимо передать хотя бы одно поле для обновления',
  })
  _atLeastOne?: never;
}
