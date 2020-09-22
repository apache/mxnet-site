

``mx.symbol.linalg_gemm2``
====================================================

Description
----------------------

Performs general matrix multiplication.
Input are tensors *A*, *B*, each of dimension *n >= 2* and having the same shape
on the leading *n-2* dimensions.

If *n=2*, the BLAS3 function *gemm* is performed:

*out* = *alpha* \* *op*\ (*A*) \* *op*\ (*B*)

Here *alpha* is a scalar parameter and *op()* is either the identity or the matrix
transposition (depending on *transpose_a*, *transpose_b*).

If *n>2*, *gemm* is performed separately for a batch of matrices. The column indices of the matrices
are given by the last dimensions of the tensors, the row indices by the axis specified with the *axis*
parameter. By default, the trailing two dimensions will be used for matrix encoding.

For a non-default axis parameter, the operation performed is equivalent to a series of swapaxes/gemm/swapaxes
calls. For example let *A*, *B* be 5 dimensional tensors. Then gemm(*A*, *B*, axis=1) is equivalent to
the following without the overhead of the additional swapaxis operations::

	 A1 = swapaxes(A, dim1=1, dim2=3)
	 B1 = swapaxes(B, dim1=1, dim2=3)
	 C = gemm2(A1, B1)
	 C = swapaxis(C, dim1=1, dim2=3)
	 
	 When the input data is of type float32 and the environment variables MXNET_CUDA_ALLOW_TENSOR_CORE
	 and MXNET_CUDA_TENSOR_OP_MATH_ALLOW_CONVERSION are set to 1, this operator will try to use
	 pseudo-float16 precision (float32 math with float16 I/O) precision in order to use
	 Tensor Cores on suitable NVIDIA GPUs. This can sometimes give significant speedups.
	 
	 
.. note:: The operator supports float32 and float64 data types only.
	 

**Example**::

	 
	 Single matrix multiply
	 A = [[1.0, 1.0], [1.0, 1.0]]
	 B = [[1.0, 1.0], [1.0, 1.0], [1.0, 1.0]]
	 gemm2(A, B, transpose_b=True, alpha=2.0)
	 = [[4.0, 4.0, 4.0], [4.0, 4.0, 4.0]]
	 
	 Batch matrix multiply
	 A = [[[1.0, 1.0]], [[0.1, 0.1]]]
	 B = [[[1.0, 1.0]], [[0.1, 0.1]]]
	 gemm2(A, B, transpose_b=True, alpha=2.0)
	 = [[[4.0]], [[0.04 ]]]
	 
	 

Usage
----------

.. code:: r

	mx.symbol.linalg_gemm2(...)

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
| ``axis``                               | int, optional, default='-2'.                               |
|                                        |                                                            |
|                                        | Axis corresponding to the matrix row indices.              |
+----------------------------------------+------------------------------------------------------------+
| ``name``                               | string, optional.                                          |
|                                        |                                                            |
|                                        | Name of the resulting symbol.                              |
+----------------------------------------+------------------------------------------------------------+

Value
----------

``out`` The result mx.symbol


Link to Source Code: http://github.com/apache/incubator-mxnet/blob/1.6.0/src/operator/tensor/la_op.cc#L163

