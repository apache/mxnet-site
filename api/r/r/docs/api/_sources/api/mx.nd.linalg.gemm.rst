.. raw:: html



``mx.nd.linalg.gemm``
==========================================

Description
----------------------

Performs general matrix multiplication and accumulation.
Input are tensors *A*, *B*, *C*, each of dimension *n >= 2* and having the same shape
on the leading *n-2* dimensions.

If *n=2*, the BLAS3 function *gemm* is performed:

*out* = *alpha* \* *op*\ (*A*) \* *op*\ (*B*) + *beta* \* *C*

Here, *alpha* and *beta* are scalar parameters, and *op()* is either the identity or
matrix transposition (depending on *transpose_a*, *transpose_b*).

If *n>2*, *gemm* is performed separately for a batch of matrices. The column indices of the matrices
are given by the last dimensions of the tensors, the row indices by the axis specified with the *axis* 
parameter. By default, the trailing two dimensions will be used for matrix encoding.

For a non-default axis parameter, the operation performed is equivalent to a series of swapaxes/gemm/swapaxes
calls. For example let *A*, *B*, *C* be 5 dimensional tensors. Then gemm(*A*, *B*, *C*, axis=1) is equivalent to

A1 = swapaxes(A, dim1=1, dim2=3)
    B1 = swapaxes(B, dim1=1, dim2=3)
    C = swapaxes(C, dim1=1, dim2=3)
    C = gemm(A1, B1, C)
    C = swapaxis(C, dim1=1, dim2=3)

without the overhead of the additional swapaxis operations.

.. note:: The operator supports float32 and float64 data types only.

**Example**::
	 
	 // Single matrix multiply-add
	 A = [[1.0, 1.0], [1.0, 1.0]]
	 B = [[1.0, 1.0], [1.0, 1.0], [1.0, 1.0]]
	 C = [[1.0, 1.0, 1.0], [1.0, 1.0, 1.0]]
	 gemm(A, B, C, transpose_b=True, alpha=2.0, beta=10.0)
	 = [[14.0, 14.0, 14.0], [14.0, 14.0, 14.0]]
	 
	 // Batch matrix multiply-add
	 A = [[[1.0, 1.0]], [[0.1, 0.1]]]
	 B = [[[1.0, 1.0]], [[0.1, 0.1]]]
	 C = [[[10.0]], [[0.01]]]
	 gemm(A, B, C, transpose_b=True, alpha=2.0 , beta=10.0)
	 = [[[104.0]], [[0.14]]]
	 


Arguments
------------------

+----------------------------------------+------------------------------------------------------------+
| Argument                               | Description                                                |
+========================================+============================================================+
| ``A``                                  | NDArray-or-Symbol.                                         |
|                                        |                                                            |
|                                        | Tensor of input matrices                                   |
+----------------------------------------+------------------------------------------------------------+
| ``B``                                  | NDArray-or-Symbol.                                         |
|                                        |                                                            |
|                                        | Tensor of input matrices                                   |
+----------------------------------------+------------------------------------------------------------+
| ``C``                                  | NDArray-or-Symbol.                                         |
|                                        |                                                            |
|                                        | Tensor of input matrices                                   |
+----------------------------------------+------------------------------------------------------------+
| ``transpose.a``                        | boolean, optional, default=0.                              |
|                                        |                                                            |
|                                        | Multiply with transposed of first input (A).               |
+----------------------------------------+------------------------------------------------------------+
| ``transpose.b``                        | boolean, optional, default=0.                              |
|                                        |                                                            |
|                                        | Multiply with transposed of second input (B).              |
+----------------------------------------+------------------------------------------------------------+
| ``alpha``                              | double, optional, default=1.                               |
|                                        |                                                            |
|                                        | Scalar factor multiplied with A*B.                         |
+----------------------------------------+------------------------------------------------------------+
| ``beta``                               | double, optional, default=1.                               |
|                                        |                                                            |
|                                        | Scalar factor multiplied with C.                           |
+----------------------------------------+------------------------------------------------------------+
| ``axis``                               | int, optional, default='-2'.                               |
|                                        |                                                            |
|                                        | Axis corresponding to the matrix rows.                     |
+----------------------------------------+------------------------------------------------------------+

Value
----------

``out`` The result mx.ndarray


Link to Source Code: http://github.com/apache/incubator-mxnet/blob/master/src/operator/tensor/la_op.cc#L81


.. disqus::
   :disqus_identifier: mx.nd.linalg.gemm
