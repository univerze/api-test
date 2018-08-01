import { Entity, Column, PrimaryGeneratedColumn, BaseEntity } from 'typeorm';

@Entity()
export class Task extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column('tinyint')
    status: number;

    @Column('text')
    metadata: string;

    @Column({ type: 'timestamp' })
    createdAt: Date;
}
